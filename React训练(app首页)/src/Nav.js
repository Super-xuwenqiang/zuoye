import React, { PureComponent } from 'react'

import "./Nav.css"



export default class Nav extends PureComponent {
  render() {
    return (
        <div id='Nav'>
            <ul>
                <li>首页</li>
                <li>推荐</li>
                <li>限免</li>
                <li>金融</li>
                <li>公司</li>
                <li>宏观</li>
                <li>+</li>
            </ul>
        </div>
    )
  }
}







