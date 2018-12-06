import React from 'react'

import * as registerActions from './actions'
import connected from '../../../setup/connect'

export const registerWrapper = WrappedComponent => {
    class RegisterProcess extends React.Component {
      handleClick = (password, confirmedPassword) => {
        this.props.registerActions.register( password, confirmedPassword )
      }
  
      render() {
        return <WrappedComponent register={this.handleClick} {...this.props} />
      }
    }
  
    return connected([], [registerActions])(RegisterProcess)
}

export default registerWrapper