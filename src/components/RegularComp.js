import React, { Component } from 'react'

export default class RegularComp extends Component {
  render() {
    console.log('regular run');
    return (
      <div>
        <h2>this is a RegularComp {this.props.number}</h2>
      </div>
    )
  }
}
