import React, { Component } from 'react'
import '../css/TourCard.css'
import {GiKnifeFork,GiMountains} from 'react-icons/gi'
import {FaCar,FaCameraRetro} from 'react-icons/fa'
import {AiFillStar,AiOutlineStar,AiOutlineClockCircle} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'

export default class TourCard extends Component {
  render() {
    const {name,image,duration,location,benefits,features,price,rating,reviews}=this.props.data
    let StarRating=[]
    for(var i=0;i<Math.round(rating);i++){StarRating.push(<AiFillStar key={i}/>)}
    for(i=Math.round(rating);i<5;i++){StarRating.push(<AiOutlineStar key={i}/>)}
    return (
      <div className='tourCard'>
          <img src={image} alt={name}/>
          <div className='alldetails'><div className='nameContainer'><div className='details'>
            <div><AiOutlineClockCircle/>{duration}</div>
            <div><MdLocationPin/>{location}</div>
          </div>
          <h3>{name}</h3>
          </div>
          <div className='benefits'>
            {benefits.includes('Snacks')&&<span><GiKnifeFork/><br/>Snacks</span>}
            {benefits.includes('Transport')&&<span><FaCar/><br/>Transport</span>}
            {benefits.includes('Photo/Video')&&<span><FaCameraRetro/><br/>Photo/Video</span>}
            {benefits.includes('Activities')&&<span><GiMountains/><br/>Activities</span>}
          </div>
          <div className='features'>{features.map((e,i)=>{return<span key={i}>{e}</span>})}</div>
          </div>
          <div className='pricing'>
          <div className='price'>
            <div>Starting from<h3>&#x20B9; <b>{price}</b></h3></div>
          </div>
          <div className='rating'>
            <div className='star'>{StarRating} <span>{rating}</span></div>
            <div className='rev'>{reviews} reviews</div>
          </div>
          <div className='viewdetails'><div>View Details</div></div>
          </div>
      </div>
    )
  }
}
