import React, { Component } from 'react'

export default class LifeCycleMount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: 'Hossain'
    }
    console.log('constructor run');
  }

  static getDerivedStateFromProps( props,state){
    console.log('getErivedStateFromProps run');
    return null;
  }
  componentDidMount(){
    console.log('componenetDidMount');
  }
  render() {
    console.log('render run');
    return (
      <div>
        <h1>how are you</h1>
      </div>
    )
  }
}
