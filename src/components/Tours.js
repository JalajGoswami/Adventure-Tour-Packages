import React, { Component } from 'react'
import '../css/Tours.css'
import AdventureType from './AdventureType'
import Data from '../Data.json'
import TourCard from './TourCard'

export default class Tours extends Component {
  render() {
    return (
      <>{Data.map((data,i)=>{
        return <div className='toursContainer' key={i}>
          <div><AdventureType name={data.name} image={data.image} /></div>
          <div>
          {data.tours.map((d,j)=>{
            return <TourCard data={d} key={j}/>
          })}
          </div>
        </div>
      })}
      </>
    )
  }
}
