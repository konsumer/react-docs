import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// cool lil dude
export const MyThing = ({param1}) => (<div>My Thing</div>)

MyThing.propTypes = {
  param1: PropTypes.boolean // this is a dummmy param
}

MyThing.defaultProps = {
  param1: true
}

export const mapStateToProps = state => ({param1: state.param1})

// this could be a redux-wrpped component or something
export default connect(mapStateToProps)(MyThing)
