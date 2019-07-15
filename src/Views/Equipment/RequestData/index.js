import React,{Component} from 'react'
import css from './index.module.scss'
import {withRouter} from 'react-router-dom'
class RequestData extends Component{
 
render(){
    var item = this.props.info
    return <li className={css.myRequestData} onClick={this.handleClick}>
        <img className={css.myRequestDataI} src={item.data.img} alt=""/>
        <ul>
        <li className={css.maRequestDateLi1}>{item.data.title}</li>
        <li className={css.maRequestDateLi2}>“{item.data.intro}”</li>
        <li className={css.maRequestDateLi3}>
        <span>{item.data.merchant}</span>
        <span>￥{item.data.price}</span>
        <span>{item.data.hits}</span>
        <span><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png" alt=""/></span>
        </li>
        </ul>
    </li>
}
handleClick=()=>{
   var data = this.props.info.data.href
 
   var reg1 = /http:\/\/m.shihuo.cn\/sports\/detail\/([^"]*)?supplierId/
   var id = reg1.exec(data)
   var D=RegExp.$1
 
   this.props.history.push(`/sports/detail/${D}`)
 
{/* axios.get("/sports/detail/").then(res=>{
       
    this.setState({
         datalist:res.data.data
     })
})*/}
// console.log(this.props.chidren)
//
// console.log()
// console.log(this.props.replace('zhuangbei/indexqk=d_zb',`/sports/detail/${RegExp.$1}`))
//this.props.history.push(`/sports/detail/${RegExp.$1}`)
}
} 
export default withRouter(RequestData);