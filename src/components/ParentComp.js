import React, { Component } from 'react'
import PureCom from './PureCom';
import RegularComp from './RegularComp';

export default class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      number: 10,
    }
  }
//  componentDidMount (){
//   setInterval(()=>{
//     this.setState({
//       number:20,
//     })
//   },1000)
//  }
  render() {
    console.log('parent run');
    return (
      <div><h1>This is a ParentComp</h1>
      <RegularComp number ={this.state.number}/>
      <PureCom number={this.state.number}/>
      </div>
    )
  }
}
