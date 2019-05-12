/**
 * Client index
 * @memberOf module:pon-demo-site/client
 * @namespace client
 */
'use strict'

import create from './create'
import handle from '../handle'

const singleton = create.for('singleton', { handle })

export default singleton
