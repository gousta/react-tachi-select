import React, { Component } from 'react'

import ExampleComponent from 'react-tachi-select'

export default class App extends Component {
  render() {
    console.log("app:render");
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
