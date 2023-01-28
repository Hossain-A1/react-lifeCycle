import React, { Component } from 'react'

export default class LifecycleUpdate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Hossain'
    }
    console.log('constructor run');
  }
static getDerivedStateFromProps(props,state){
  console.log('getDErivedSaateFromProps run');
  return null
}
 componentDidMount(){
  console.log('comonentDidMount run');
 }
 shouldComponentUpdate(){
  console.log('shouldComponentUpdate run');
  return true;
 }
 getSnapshotBeforeUpdate(previousProps,previousState){
  console.log('getSnapshortBeforeUpdate run');
  return null
 }
//  componentDidUpdate(){
//   console.log('componentDidUpdate run');
//  }
 updateRender(){
  this.setState({
    name: 'Alvy'
  })
 }
  render() {
    console.log('render run');
    return (
      <div>
        <button onClick={()=> this.updateRender()}>update state</button>
      </div>
    )
  }
}
