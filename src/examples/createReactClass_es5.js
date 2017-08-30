var React = require('react')
var createReactClass = require('create-react-class')
var PropTypes = require('prop-types')

// cool lil dude
var MyThing = createReactClass({
  render: function () {
    return (<div>My Thing</div>)
  }
})

MyThing.propTypes = {
  param1: PropTypes.boolean // this is a dummmy param
}

MyThing.defaultProps = {
  param1: true
}

module.exports = MyThing
