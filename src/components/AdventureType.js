import React, { Component } from 'react'
import '../css/AdventureType.css'

export default class AdventureType extends Component {
  render() {
      const {image, name} = this.props
    return (
      <div className='adventType'>
          <img src={image} alt={name} />
          <h3>{name}</h3>
      </div>
    )
  }
}
