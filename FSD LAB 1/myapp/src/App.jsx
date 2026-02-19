import React, { Component } from 'react'
import First from './component/First.jsx'
import Second from './component/Second.jsx'

export default class App extends Component {
  render() {
    return (
      <div>App
        <First />
        <Second />
      </div>
    )
  }
}
