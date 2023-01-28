import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {

  render() {
    console.log('pure run');
    return (
      <div>
        <h1>This is a PureComponent {this.props.number}</h1>
      </div>
    )
  }
}

