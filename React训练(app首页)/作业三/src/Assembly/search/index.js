import React, { Component } from 'react'
import "./search.css"

export default class search extends Component {
  render() {
    return (
      <div id='search'>
        <input type='submit'className='submit' ></input>
        <input type="text" placeholder="新冠肺炎" className='text-1'></input>
        <span className='cont-1'></span>
      </div>
    )
  }
}




