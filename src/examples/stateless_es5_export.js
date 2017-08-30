var React = require('react')
var PropTypes = require('prop-types')

// cool lil dude
function MyThing (props) {
  return (<div>My Thing</div>)
}

MyThing.propTypes = {
  param1: PropTypes.boolean // this is a dummmy param
}

MyThing.defaultProps = {
  param1: true
}

module.exports.MyThing = MyThing
