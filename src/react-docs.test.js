/* global describe it expect */

import reactDocs from './index'

describe('react-docs', () => {
  it('should handle component in ES6', () => {
    expect(reactDocs('src/examples/component_es6.js')).toMatchSnapshot()
  })
  it('should handle createReactClass in ES5', () => {
    expect(reactDocs('src/examples/createReactClass_es5.js')).toMatchSnapshot()
  })
  it('should handle PureComponent in ES6', () => {
    expect(reactDocs('src/examples/purecomponent_es6.js')).toMatchSnapshot()
  })
  it('should handle stateless component in ES5 exported as default', () => {
    expect(reactDocs('src/examples/stateless_es5_default.js')).toMatchSnapshot()
  })
  it('should handle a stateless component in ES5 exported', () => {
    expect(reactDocs('src/examples/stateless_es5_export.js')).toMatchSnapshot()
  })
  it('should handle a stateless component in ES6', () => {
    expect(reactDocs('src/examples/stateless_es6.js')).toMatchSnapshot()
  })
})
