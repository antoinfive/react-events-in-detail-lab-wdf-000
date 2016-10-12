import React, { Component } from 'react'

class CoordinatesButton extends Component {
  constructor(props) {
    super()

    this.clickHandler = this.clickHandler.bind(this)
  }
    
  clickHandler(event){
     this.props.onReceiveCoordinates([event.clientY, event.clientX]) 
  }

  render(){
    return (
      <button onClick={this.clickHandler} />
    ) 
   }

}

module.exports = CoordinatesButton
