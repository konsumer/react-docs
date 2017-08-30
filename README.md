## NOT READY

Still putting together ideas

# react-docs

Generate documentation object for exported react components.

## installation

For CLI:

```
npm i -g react-docs
```

For using in your code:

```
npm i -S react-docs
```

## CLI usage

```
react-docs MyComponent.js
```

## API usage

```js
import doc from 'react-docs'

console.log(doc('./MyComponent.js'))

```

You can also parse a string:

```js
import { parse } from 'react-docs'

console.log(parse(`
import React from 'react'
improt PropTypes from 'prop-types'

// cool lil dude
export const MyThing = ({param1}) => (<div>My Thing</div>)


MyThing.propTypes = {
  param1: PropTypes.boolean // this is a dummmy param
}

MyThing.defaultProps = {
  param1: true
}

// this could be a redux-wrpped component or something
export default MyThing
`))
```

Use [`propTypes`, `defaultProps`](https://facebook.github.io/react/docs/typechecking-with-proptypes.html), and comments to make your docs better.

You can use `createReactClass`, classes that `extend React.Component`, `extend React.PureComponent` or stateless-function components. You can use ES6 or ES5.

## motivation

This is similar to [react-docgen](https://github.com/reactjs/react-docgen) and outputs objects that look very similar, but it differs in it's ability to better handle multiple exported components, and better handle differnt styles of component definitions.
