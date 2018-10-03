/**
 * AdminUserRoleForm component
 */
'use strict'

import React from 'react'
import { localized, stateful } from 'the-component-mixins'

@stateful(
  (state) => ({}),
  ({}) => ({}),
)
@localized
class AdminUserRoleForm extends React.Component {
  render () {
    const {l} = this.props
    return (
      <div>
      </div>
    )
  }
}

export default AdminUserRoleForm
