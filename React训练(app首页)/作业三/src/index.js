import React from 'react'; //导入react
import {render} from 'react-dom'; //从render中导入react-dom


import './index.css'
import Search from "./Assembly/search";  //搜索栏
import Nav from "./Assembly/Nav";    //分类导航
import Banner from "./Assembly/banner";  //幻灯片
import Article from "./Assembly/article";    //文章列表
import Tabbar from "./Assembly/tabbar";  //底部导航

/*
import axios from '../node_modules/axios'
axios.get('http://playground.it266.com/news') //网址
.then((response) => {
    console.log(response)
    console.log(response.data.articles) 
    
        var www = [];
        www = response.data.articles;
        console.log(www)

        www.map((item) =>{
            console.log(item)
        })
        // {
        //     www.map((item) =>{
        //         // return <Article {...item}></Article>
        //     })
        // }

    })
    .catch((error) => {
        console.log(error)
})
*/


let articles = [
    {'id' : 1, 'title' : '第1篇新闻'},
    {'id' : 2, 'title' : '第二篇新闻'},
    {'id' : 3, 'title' : '第三篇新闻'},
    {'id' : 4, 'title' : '第四篇新闻'}
]

// console.log(articles)

// articles.map((item) => {
//     console.log(item)
// })


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


        {/* <Article {...www[0]}></Article> */}

    
        {/* {
            articles.map((item) => {
                return <Article {...item}></Article>
            })
            
        }  */}
    
        
    {/*         
        <Article {...articles[0]}></Article>
        <Article id='2' title='第二篇内容'></Article>
        <Article id='3' title='第三篇内容'></Article>
        <Article id='4' title='第四篇内容'></Article>
    */}

        {/* 底部导航 */}
        <Tabbar></Tabbar>

    </div>
)

render(app,document.getElementById("root"))