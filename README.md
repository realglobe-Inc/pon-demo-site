pon-demo-site
==========

<!---
This file is generated by the-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/pon-demo-site
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/pon-demo-site
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/pon-demo-site.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/pon-demo-site
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/pon-demo-site.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/pon-demo-site/blob/master/LICENSE
[bd_npm_url]: http://www.npmjs.org/package/pon-demo-site
[bd_npm_shield_url]: http://img.shields.io/npm/v/pon-demo-site.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Demo of web site using pon

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/00.Requiements.md.hbs" Start -->

<a name="section-doc-readme-00-requiements-md"></a>

Requirements
----------

+ [Node.js &gt;&#x3D;10](https://nodejs.org/en/)
+ [Docker](https://www.docker.com/)


<!-- Section from "doc/readme/00.Requiements.md.hbs" End -->

<!-- Section from "doc/readme/01.Preparing.md.hbs" Start -->

<a name="section-doc-readme-01-preparing-md"></a>

Preparing
----------

Install CLI packages if you have not

```bash
$ npm i pon pm2 -g
```

Then, install dependencies and build the project

```bash
$ npm install
$ pon prepare
```

<!-- Section from "doc/readme/01.Preparing.md.hbs" End -->

<!-- Section from "doc/readme/02.Development.md.hbs" Start -->

<a name="section-doc-readme-02-development-md"></a>

Development
----------

### Starting dev server

```bash
# Start server and watch files to compile
pon d
```

<!-- Section from "doc/readme/02.Development.md.hbs" End -->

<!-- Section from "doc/readme/03.Production.md.hbs" Start -->

<a name="section-doc-readme-03-production-md"></a>

Production
----------

```bash

# Start app on production

pon production
```

<!-- Section from "doc/readme/03.Production.md.hbs" End -->

<!-- Section from "doc/readme/10.Tips.md.hbs" Start -->

<a name="section-doc-readme-10-tips-md"></a>

Tips
-----------

### Managing Docker Infra

To show available commands,

```bash

pon -l | grep docker

```

### Restarting Server

```bash
pon stop
pon start
```

Or, just

```bash
pon restart
```


### Project Structure

Directory structure of this project

| Directory Path | Description |
| ---- | ----- |
| assets | Static file directory |
| bin | Executable files |
| client | Client side scripts |
| client/client | RPC Client |
| client/scenes | Client logic without ui |
| client/shim | Generated shim files |
| client/store | Client side data store |
| client/test | Client tests |
| client/ui | User interfaces |
| conf | Configuration of project |
| doc | Documents |
| doc/guides | Guides for README |
| misc | Misc scripts |
| public | Public directory to serve static files. Auto-generated |
| server | Server side files |
| server/controllers | Controller classes to handle RPC |
| server/db | Database modules |
| server/env | Env dependant variables |
| server/server | HTTP Server module |
| server/test | Server tests |
| test | Project tests |
| tmp | Temporary files. Can be deleted anytime. |
| var | Var files |



<!-- Section from "doc/readme/10.Tips.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/pon-demo-site/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [Pon][pon_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[pon_url]: https://github.com/realglobe-Inc/pon
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
