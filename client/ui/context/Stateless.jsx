'use strict'

import theAssert from '@the-/assert'
import context from './context'

const assert = theAssert('context/Stateless')

/**
 * @memberof module:pon-demo-site/client.context
 * @function Stateless
 */
export default function Stateless() {
  assert(arguments.length === 0, 'takes exactly no arguments')
  const init = ({ l }) => ({ l })
  const noop = () => null
  return (renderer) => (
    <context.Entry init={init} pipe={noop}>
      {renderer}
    </context.Entry>
  )
}
