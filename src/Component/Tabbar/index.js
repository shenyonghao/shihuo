import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'

// console.log(css)
class Tabbar extends Component{
  state = {
    current:0,
    datalist:[{
      name:'首页',
      address:'/qk=d_sy',
      img1:'//sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600"',
      img2:'//sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600'
    },
    {
      name:'优惠',
      address:'/youhuiqk=d_yh',
      img1:'//sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600"',
      img2:'//sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600"'
    },
    {
      name:'发现',
      address:'/find/indexqk=d_fx',
      img1:'//sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600"',
      img2:'//sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600"'
    },
    {
      name:'装备',
      address:'/zhuangbei/indexqk=d_zb',
      img1:'//sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600"',
      img2:'//sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600"'
    },
    {
      name:'更多',
      address:'/userqk=d_gr',
      img1:'//sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600',
      img2:'//sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600'
    }

  ]
  }
componentWillMount(){
  // console.log(localStorage.getItem("name"))
  var a = localStorage.getItem("name")
  a = Number(a)
  setTimeout(()=>{
    this.setState({
      current:a
    })
  },50)
  
}

  render(){
    return <div>
      <ul className={css.mytabbar}>
          {
            this.state.datalist.map((item,index)=><li key={index} onClick={()=>{
              this.handleClick(index)
            }}>
              <NavLink to={this.state.datalist[index].address} activeClassName={this.state.current===index?css.myactive:''} replace>
              <span><img src={this.state.current===index?this.state.datalist[index].img2:this.state.datalist[index].img1} alt=""/></span>
              {item.name}
              </NavLink>
            </li>)
          }
      </ul>
    </div>
  }
  handleClick=(index)=>{
    console.log(index)
    localStorage.setItem("name",index)
    this.setState({
      current:index,
    })
  }
}


export default Tabbar;
