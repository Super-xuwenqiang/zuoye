import React, { Component } from 'react'

import "./tabbar.css"
export default class tabbar extends Component {
  render() {
    return (
      <div id='tabbar'>
          <ul>
              <li>
                <img src='./img/icon/5.png' width='20px' height='20px' />
                <p>要闻</p>
              </li>
              <li>
                <img src='./img/icon/1.png' width='20px' height='20px' />
                <p>周刊</p>
              </li>
              <li>
                <img src='./img/icon/4.png' width='20px' height='20px' />
                <p>特供</p>
              </li>
              <li>
                <img src='./img/icon/2.png' width='20px' height='20px' />
                <p>数据通</p>
              </li>
              <li>
                <img src='./img/icon/3.png' width='20px' height='20px' />
                <p>我的</p>
              </li>
          </ul>
      </div>
    )
  }
}












