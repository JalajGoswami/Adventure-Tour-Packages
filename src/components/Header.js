import React, { Component } from 'react'
import '../css/Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
          <img src='/res/Banner.jpg' alt='banner'/>
          <div className='title'>Universal Adventures</div>
      </div>
    )
  }
}
