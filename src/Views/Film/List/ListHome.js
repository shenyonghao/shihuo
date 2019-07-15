import React,{Component} from 'react'
import css from './ListHome.module.scss'
// import { Item } from 'antd-mobile/lib/tab-bar';
import {withRouter} from 'react-router-dom'
// import HomeDetail from '../../../Detail/HomeDetail/HomeDetail.js'
class ListHome extends Component{
    state = {
        isshow:false
    }
    render(){
        return <div className={css.list}>
                <ul>
                <li onClick={()=>{
                    this.props.history.push('/basketball')
                }}>
                    <div>
                        <h2>篮球</h2>
                        <p>纯白系列秒杀</p>
                    </div>
                    <img src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1" alt="" />
                </li>
                <li onClick={()=>{
                    this.props.history.push('/running')
                }}>
                    <div>
                        <h2>跑步</h2>
                        <p>女王节秒杀</p>
                    </div>
                    <img src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1" alt="" />
                </li>
                <li onClick={()=>{
                    this.props.history.push('/playing')
                }}>
                    <div>
                        <h2>健身</h2>
                        <p>布瑞特装备秒杀</p>
                    </div>
                    <img src="http://shihuo.hupucdn.com/def/20170915/f876eb7f43db68bf6618332e8e8d16391505460754.jpg?imageView2/0/w/160/h/160/interlace/1" alt="" />
                </li>
                <li onClick={()=>{
                    this.props.history.push('/soccer')
                }}>
                    <div>
                        <h2>足球</h2>
                        <p>其实是在吹总裁</p>
                    </div>
                    <img src="http://shihuo.hupucdn.com/def/20170914/68b831b957175d20646cffe9da8141ce1505384699.jpg?imageView2/0/w/160/h/160/interlace/1" alt="" />
                </li>
                <li onClick={()=>{
                    this.props.history.push('/fashion')
                }}>
                    <div>
                        <h2>潮流</h2>
                        <p>78元短袖秒杀</p>
                    </div>
                    <img src="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/0/w/160/h/160/interlace/1" alt="" />
                </li>
                <li onClick={()=>{
                    this.props.history.push('/digital')
                }}>
                    <div>
                        <h2>数码</h2>
                        <p>便携播放器</p>
                    </div>
                    <img src="http://shihuo.hupucdn.com/appZone/201710/1317/749c6c723b3029420783d6358d19799c.jpg?imageView2/0/w/160/h/160/interlace/1" alt="" />
                </li>
            </ul>
                <ul>
                    <li onClick={()=>{
                        this.props.history.push('/youhuiqk=d_yh')
                        localStorage.setItem('name','1')   //本地存储的方法 localStorage.setItem （存）和getItem（取）
                        window.location.reload()   // 刷新
                    }}>
                        <h2>今日优惠</h2>
                        <p>EQT 5折好价</p>
                        <div>
                            <img src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1" alt=""/>
                        </div>
                        
                    </li>
                    <li onClick={()=>{
                        this.props.history.push('/find/indexqk=d_fx')
                        localStorage.setItem("name","2")
                        window.location.reload()
                    }}>
                        <h2>限时团购</h2>
                        <p>春节不打烊</p>
                        <div>
                             <img src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1" alt=""/>
                        </div>
                       
                    </li>
                    <li onClick={()=>{
                        this.props.history.push('/find/indexqk=d_fx')
                        localStorage.setItem("name","2")
                        window.location.reload()
                    }}>
                        <h2>一键海淘</h2>
                        <p>卡西欧黑金249元</p>
                        <div>
                            <img src="http://shihuo.hupucdn.com/appHome/201807/1310/f975458f8da63b0769796aba49271e1c.jpg?imageView2/2/w/120/h/120/interlace/1" alt=""/>
                        </div>
                        
                    </li>
                </ul>
                <h3>热门活动</h3>
                <ul>
                    <li>
                        <img src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg" alt="" />
                        <p>skullcandy骷髅头耳机</p>
                        <span>券后低至89元起</span>
                    </li>
                    <li>
                        <img src="http://shihuo.hupucdn.com/appZone/201801/3117/dfb166bb32589d4c0c0f33613a7160cc.jpg" alt="" />
                        <p>装备微讯</p>
                        <span>2分钟懂你想要</span>
                    </li>
                    <li>
                        <img src="http://shihuo.hupucdn.com/appZone/201811/1214/2720301b13ee5c2b0003f78125b698ea.jpg" alt="" />
                        <p>1000块包全身</p>
                        <span>不说虚话</span>
                    </li>
                    <li>
                        <img src="http://shihuo.hupucdn.com/appZone/201812/0411/e8dd17f83bc977f0d7014a077ed9d821.jpg" alt="" />
                        <p>怎么穿显高且有范</p>
                        <span>170+穿搭指南</span>
                    </li>
                    <li>
                        <img src="http://shihuo.hupucdn.com/appZone/201811/1214/ea91521753d0e0f95f4a5c82094aee79.jpg" alt="" />
                        <p>考虑一下荧光绿</p>
                        <span>要想生活过得去</span>
                    </li>
                    <li>
                        <img src="http://shihuo.hupucdn.com/appZone/201811/1216/32de94d3d483749627b0716d9cde722b.png" alt="" />
                        <p>潮流圈的编辑们</p>
                        <span>Ta说</span>
                    </li>
                   
                </ul>
                <ul>
                    <li>
                        推荐
                        
                    </li>
                    <li className={this.state.isshow?css.line:''} onClick={()=>{
                        this.setState({
                            isshow:true
                        })
                        setTimeout(()=>{
                            this.props.history.push('/basketball')
                        },300)

                        }}>
                        篮球
                        {/* <HomeDetail/> */}
                    </li>
                    <li onClick={()=>{
                            this.props.history.push('/running')
                            // console.log(this.props)
                        }}>
                        跑步
                    </li>
                    <li onClick={()=>{
                            this.props.history.push('/playing')
                        }}>
                        健身
                    </li>
                    <li onClick={()=>{
                            this.props.history.push('/fashion')
                        }}>
                        潮流
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>全部</p>
                        
                        
                    </li>
                        
                    <li>
                        <p>单品推荐</p>
                        
                    </li>
                    <li>
                        <p>原创精选</p>
                        
                    </li>
                    <li>
                        <p>用户晒物</p>
                        
                    </li>
                </ul>
            </div>
    }
}

export default withRouter(ListHome)