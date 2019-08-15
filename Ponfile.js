/**
 * Pon tasks
 * @file Ponfile
 * @see https://github.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')
const {
  command: {
    spawn: { git, npm, npx },
  },
  coz,
  env,
  fs: { chmod, concat, cp, del, mkdir, symlink, write },
} = require('pon-task-basic')
const db = require('pon-task-db')
const docker = require('pon-task-docker')
const es = require('pon-task-es')
const pm2 = require('pon-task-pm2')
const { browser, ccjs, css, react } = require('pon-task-web')
const theAssets = require('@the-/assets')
const theBin = require('@the-/bin/pon')
const thePS = require('@the-/ps/pon')
const theSecret = require('@the-/secret')
const theSetting = require('@the-/setting')
const { Paths, locales } = require('./conf')
const Containers = require('./misc/docker/Containers')
const Bins = require('./misc/project/Bins.json')
const Directories = require('./misc/project/Directories.json')
const Pondoc = require('./misc/project/Pondoc.json')
const { Project, WebApps } = require('./server/constants')
const migration = require('./server/db/migration')

const setting = theSetting(
  Project.SETTING_FILE,
  /** @lends module:pon-demo-site/server.constants.SettingValues */
  {
    APP_CDN_URL: '',
    APP_DOMAIN: 'pon-demo-site.org',
  },
)
const secret = theSecret(Project.SECRETS_FILE, Project.SECRET_MASTER_PASSWORD)

const createDB = () => require('./server/db/create').forTask()

module.exports = pon(
  /** @module tasks */
  {
    $cwd: __dirname,
    $doc: Pondoc,
    'assert:not-prod': env.notFor('production'),
    'assets:install': () => theAssets().installTo('assets', { copy: true }),
    'check:bin': theBin.test(Bins),
    'constants:print': () => console.log(require('./server/constants')),
    'db:cli': () => createDB().cli(),
    /** Drop database */
    'db:drop': ['assert:not-prod', db.drop(createDB)],
    /** Migrate data */
    'db:migrate': db.migrate(createDB, migration, {}),
    /** Drop and setup database again */
    'db:reset': ['assert:not-prod', 'db:drop', 'db:setup', 'db:seed'],
    /** Generate test data */
    'db:seed': db.seed(createDB, 'server/db/seeds/:env/*.seed.js'),
    /** Setup database */
    'db:setup': db.setup(createDB),
    'docker:nginx': docker.nginx(
      Containers.nginx.name,
      Containers.nginx.options,
    ),
    /** Prepare redis docker container */
    'docker:redis': docker.redis(
      Containers.redis.name,
      Containers.redis.options,
    ),
    'env:debug': env('development', { DEBUG: 'app:*' }),
    /** Set env variables for production */
    'env:prod': env('production'),
    /** Set env variables for test */
    'env:test': env('test'),
    'git:catchup': [git('stash'), git('pull')],
    'loc:print': () => console.log(locales.toCompound()),
    'maint:off': del('public/status/maintenance'),
    /** Enable maintenance mode */
    'maint:on': write('public/status/maintenance'),
    'pkg:fix': npx('fixpack'),
    /** Install packages */
    'pkg:install': npm('install', '--ignore-scripts'),
    /** Link self packages */
    'pkg:link': symlink(
      {
        'shim/conf': 'node_modules/@self/conf',
        client: 'node_modules/@self/client',
      },
      { force: true },
    ),
    /** Upgrade packages package.json */
    'pkg:upg': npm('upgrade', '--ignore-scripts'),
    'pm2:app': pm2('./bin/app.js', { name: WebApps.Default.PROCESS_NAME }),
    'prod:clean': del('public/build/**/*.*'),
    /** Compile files for production */
    'prod:compile': [
      'env:prod',
      'prod:clean',
      'build',
      'prod:map',
      'prod:css',
      'prod:js',
    ],
    /** Compile css files for production */
    'prod:css': css.minify(
      [`public${Paths.CSS_BUNDLE_PATH}`],
      `public${Paths.PROD_CSS_BUNDLE_PATH}`,
    ),
    /** Prepare database for production */
    'prod:db': ['env:prod', 'db'],
    /** Compile js files for production */
    'prod:js': ccjs.dir('public/build', `public${Paths.PROD_ASSET_PATH}`, {}),
    /** Delete source map files for production */
    'prod:map': del('public/**/*.map'),
    'ps:debug': thePS('var/app/debug.pid'),
    'secret:dec': () => secret.decrypt(),
    /** Encrypt secret file */
    'secret:enc': () => secret.encrypt(),
    'struct:chmod': chmod({
      '.githooks/**/*.js': '755',
      'bin/**/*.*': '755',
      'misc/**/*.sh': '755',
      'misc/scripts/*.*': '755',
    }),
    /** Compile files */
    'struct:compile': [
      es('conf', 'shim/conf', { sourceRoot: '../../../../conf' }),
      es('utils', 'shim/utils', { sourceRoot: '../../../../conf' }),
    ],
    /** Execute file copy */
    'struct:cp': cp(
      {
        'assets/css': 'public/css',
        'assets/html/server-error': 'public/server-error',
        'assets/images': 'public/images',
        'assets/js': 'public/js',
        'assets/text': 'public',
        'assets/webfonts': 'public/webfonts',
      },
      { force: true },
    ),
    /** Generate project directories */
    'struct:mkdir': mkdir([...Object.keys(Directories)]),
    /** Prepare sub packages */
    'struct:pkg': [
      cp(
        {
          'package.json': 'shim/package.json',
        },
        { force: true },
      ),
    ],
    'struct:render': [
      coz(
        [
          '+(conf|client|server)/**/.index.*.bud',
          '+(assets|bin|client|conf|doc|misc|server|test|utils)/**/.*.bud',
          '.*.bud',
        ],
        {},
      ),
    ],
    'ui:browser': env.dynamic(
      () =>
        browser(
          {
            bundle: 'ui/entrypoint.js',
          },
          'public/build/[name].js',
          {
            context: `${__dirname}/client/shim`,
            publicPath: `${Paths.JS_CHUNK_BASE_PATH}/`,
          },
        ),
      { sub: ['watch', 'analyze'] },
    ),
    /** Compile stylesheets */
    'ui:css': [
      css('client/ui', 'client/shim/ui', {
        inlineMap: true,
        modules: true,
        pattern: [
          '*.pcss',
          '+(stateful|stateless|views|layouts|wrappers|components)/**/*.pcss',
        ],
      }),
      concat(
        ['client/shim/ui/**/*.css', 'client/ui/styles/*.pcss'],
        'public/build/bundle.pcss',
        {},
      ),
      css('public/build', 'public/build', { pattern: '*.pcss' }),
      css('assets/css', 'public/css', { pattern: '*.css' }),
    ],
    /** Run ws css watch */
    'ui:css/watch': 'ui:css/*/watch',
    /** Compile react components */
    'ui:react': react('client', 'client/shim', {
      extractCss: 'client/shim/ui/bundle.pcss',
      pattern: ['*.js', '*.jsx', '!(shim)/**/+(*.jsx|*.js|*.json)'],
      sourceRoot: '..',
      watchTargets: 'client/ui/**/*.pcss',
    }),
    'ui:workers': env.dynamic(
      () =>
        browser.all('workers', 'public', {
          context: `${__dirname}/client/shim`,
        }),
      { sub: ['watch', 'analyze'] },
    ),
    assets: ['assets:*'],
    b: 'build',
    /** Build all */
    build: ['pkg:link', 'struct', 'ui'],
    /** Check bins */
    check: ['check:*'],
    /** Prepare DB */
    db: ['db:setup', 'db:seed'],
    /** Default for `pon` command */
    default: ['build'],
    /** Deploy project on production */
    deploy: [
      'maint:on',
      'stop',
      'git:catchup',
      'pkg:install',
      'prod',
      'db:migrate',
      'db:seed',
      'maint:off',
    ],
    /** Generate docs */
    doc: 'doc:*',
    /** Setup docker infra */
    docker: ['docker:redis/run', 'docker:nginx/run'],
    /** Show app daemon logs */
    logs: ['pm2:app/logs'],
    /** Shortcut for `prod` task */
    p: 'prod',
    /** Shortcut for 'prepare` task */
    pre: 'prepare',
    /** Prepare project */
    prepare: [
      'check',
      'struct:compile',
      'pkg:link',
      'secret:enc',
      'struct',
      'assets',
      'docker',
      'db',
      'build',
    ],
    /** Prepare and start on production */
    prod: ['env:prod', 'prod:compile', 'prod:db', 'start'],
    /** Restart app as daemon */
    restart: ['pm2:app/restart'],
    /** Update project settings with interactive shell */
    setting: () => setting.ask(),
    /** Show app daemon status */
    show: ['pm2:app/show'],
    /** Start app as daemon */
    start: ['pm2:app/start'],
    /** Stop app as daemon */
    stop: ['pm2:app/stop'],
    /** Run all struct tasks */
    struct: [
      'struct:mkdir',
      'struct:compile',
      'struct:cp',
      'struct:pkg',
      'struct:render',
      'struct:chmod',
    ],
    /** Run all ui tasks */
    ui: ['ui:css', 'ui:react', 'ui:browser', 'ui:workers'],
  },
)
