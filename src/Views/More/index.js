import React,{Component} from 'react'
// import axios from 'axios'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
// console.log(css)
import {HideState} from './Login/actionCreator'
import {connect} from 'react-redux'
class More extends Component{
    render(){
        return <div className={css.more}>
            <header>
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" alt=""/>
                {
                    this.props.isState?
                    <div>
                        <span>已登陆</span>
                        <span onClick = {()=>{
                            this.handleclick()
                        }}>退出登录</span>
                        <a>已登陆</a>
                        <a onClick = {()=>{
                            this.handleclick()
                        }}>退出登录</a>
                    </div>
                    :<div>
                    <NavLink to="/login">登录</NavLink>
                    <NavLink to="/register">注册</NavLink>
                    <p>金币 0</p>
                    </div>
                }
                
            </header>
            <div className={css.a}>
                <h3>我的识货</h3>
                <ul>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt=""/>
                        <p>我的收藏</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt=""/>
                        <p>我的晒物</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt=""/>
                        <p>我的礼品</p>
                    </li>
                </ul>
            </div>
            <div className={css.a}>
                <h3>我的海淘</h3>
                <ul>
                    <li onClick={()=>{this.props.history.push('/haitao/cart')}}>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/cart.png" alt=""/>
                        <p>购物车</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/haitao_order.png" alt=""/>
                        <p>海淘订单</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/haitao_kefu.png" alt=""/>
                        <p>淘宝客服</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_address.png" alt=""/>
                        <p>地址管理</p>
                    </li>
                </ul>
            </div>
            <div className={css.a}>
                <h3>识货必备</h3>
                <ul>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png" alt=""/>
                        <p>推荐店铺</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt=""/>
                        <p>黑科技选鞋</p>
                    </li>
                </ul>
            </div>
        </div>
    }
    handleclick= ()=>{
       this.props.registerHide()
    }
}
const mapDispatchToProps = {
    registerHide:HideState
}
const mapStateToProps= (state) => {
   return {
    isState:state.isState
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(More)