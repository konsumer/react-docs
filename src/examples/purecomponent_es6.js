import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// cool lil dude
export class MyThing extends PureComponent {
  render () {
    return (<div>My Thing</div>)
  }
}

MyThing.propTypes = {
  param1: PropTypes.boolean // this is a dummmy param
}

MyThing.defaultProps = {
  param1: true
}

export const mapStateToProps = state => ({param1: state.param1})
