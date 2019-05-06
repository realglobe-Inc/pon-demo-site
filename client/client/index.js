/**
 * Client index
 * @memberOf module:client
 * @namespace client
 */
'use strict'

import create from './create'
import handle from '../handle'

const singleton = create.for('singleton', { handle })

export default singleton
