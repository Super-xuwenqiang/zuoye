import React, { Component } from 'react'

import './banner.css';
import backimg_1 from '../../img/6.jpg';
import backimg_2 from '../../img/5.jpg';
import backimg_3 from '../../img/4.jpg';
import backimg_4 from '../../img/4.jpg';

export default class Banner extends Component {
  render() {
    return (
      <div id='banner'>
        <ul>
          <li>
            <img src={backimg_1} alt='加载失败' width='100%' height='200px'/>
          </li>
          <li>
            <img src={backimg_2} alt='加载失败' width='100%' height='200px'/>
          </li>
          <li>
            <img src={backimg_3} alt='加载失败' width='100%' height='200px'/>
          </li>
          <li>
            <img src={backimg_4} alt='加载失败' width='100%' height='200px'/>
          </li>
          
        </ul>
      </div>
    )
  }
}
























