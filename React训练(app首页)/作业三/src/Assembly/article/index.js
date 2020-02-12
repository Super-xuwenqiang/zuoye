// import React, { Component } from 'react'

// import './article.css'
// function article (poper) {
//   // console.log(poper.titel)


//   // let {id,title} = poper;//属性
//     return (
//       <div id='big-box'>
//           <div className='text-2'>
//             <p> {poper.title} </p>
//           </div>
//           <div className='text-3'></div>
//       </div>
//     )
//   }
// export default article;



import React, { Component } from 'react'
import './article.css'
import axios from '../../../node_modules/axios'


export default class aricle extends Component {

  state = {
    articles : [], //文章列表
  }
  
  componentDidMount(){

    axios.get('http://playground.it266.com/news') //网址
    .then((response) => {
      console.log(response)
      console.log(response.data.articles) 
   
      this.setState({articles:response.data.articles})
      console.log(this.state.articles)
    })
    .catch((error) => {
        console.log(error)
    })
  }
  
  
  
  render() {
    return (
          this.state.articles.map((item) =>{
            return  (
        <div id='big-box'>
          <div className='text-2'>
            {item.title}
          </div>
          <div className='text-3'></div>
       </div>
       )
          })
    )
  }
}
