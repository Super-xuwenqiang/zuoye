import React, { Component } from 'react'


import "./tabbar.css"
import logo_1 from '../../img/icon/5.png'
import logo_2 from '../../img/icon/1.png'
import logo_3 from '../../img/icon/4.png'
import logo_4 from '../../img/icon/2.png'
import logo_5 from '../../img/icon/3.png'


export default class tabbar extends Component {
  render() {
    return (
      <div id='tabbar'>
          <ul>
              <li>
                <img src={logo_1} width='20px' height='20px' alt='加载失败'/>
                <p>要闻</p>
              </li>
              <li>
                <img src={logo_2} width='20px' height='20px' alt='加载失败'/>
                <p>周刊</p>
              </li>
              <li>
                <img src={logo_3} width='20px' height='20px' alt='加载失败'/>
                <p>特供</p>
              </li>
              <li>
                <img src={logo_4} width='20px' height='20px' alt='加载失败'/>
                <p>数据通</p>
              </li>
              <li>
                <img src={logo_5} width='20px' height='20px' alt='加载失败'/>
                <p>我的</p>
              </li>
          </ul>
      </div>
    )
  }
}












