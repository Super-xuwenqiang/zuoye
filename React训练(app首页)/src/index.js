import React from 'react'; //导入react
import {render} from 'react-dom'; //从render中导入react-dom


import './index.css'
import Search from "./search";  //搜索栏
import Nav from "./Nav";    //分类导航
import Banner from "./banner";  //幻灯片
import Article from "./article";    //文章列表
import Tabbar from "./tabbar";  //底部导航


let app = (
    <div id='index'>
        
        {/* 搜索栏 */}
        <Search></Search>

        {/* 分类导航 */}
        <Nav></Nav>

        {/* 幻灯片 */}
        <Banner></Banner>

        {/* 文章列表 */}
        <Article></Article>
        <Article></Article>
        <Article></Article>
        <Article></Article>

        {/* 底部导航 */}
        <Tabbar></Tabbar>

    </div>
)

render(app,document.getElementById("root"))