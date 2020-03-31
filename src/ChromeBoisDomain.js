import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.pageX, event.pageY)
  }
  
  handleToggleCycling = () => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    console.log(event.key)
    event.key === 'a' ? resize('+') : resize('-')
  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleToggleCycling}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
