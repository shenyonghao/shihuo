import React, { Component } from 'react'
import axios from 'axios'
import css from './HomeDetail.module.scss'
// import { PullToRefresh } from 'antd-mobile';


class HomeDetail extends Component {
    state = {
        refreshing: false,
        datalist: []
    }
    render() {
        return <div className={css.HomeDetail}>
            <header>
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt="" onClick={() => {
                    // this.props.myname.history.push('/qk=d_sy')
                    window.location.href = '/qk=d_sy'
                }} />
                <h2>识货-识物</h2>
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" alt="" />
            </header>
            <nav>
                <ul>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/lanqiuxie2.png" alt="" />
                        <p>篮球鞋</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/qiuyi2.png" alt="" />
                        <p>篮球上装</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/qiuku2.png" alt="" />
                        <p>篮球下装</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/lanqiuhuju1.png" alt="" />
                        <p>篮球配件</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/lanqiu2.png" alt="" />
                        <p>篮球</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png" alt="" />
                        <p>Jordan</p>

                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/adidas.png" alt="" />
                        <p>adidas</p>

                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/nike1.png" alt="" />
                        <p>Nike</p>

                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/ua.png" alt="" />
                        <p>UA</p>
                    </li>
                    <li>
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png" alt="" />
                        <p>全部</p>
                    </li>
                </ul>
            </nav>
            {/* <h3>热门活动</h3>
            <ul>
                <li>
                    <img src="" alt=""/>
                    虎扑优选精英篮球袜
                    低至6.9元
                </li>
                <li>
                    <img src="" alt=""/>
                    实战性价比之选
                    球星支线
                </li>
                <li>
                    <img src="" alt=""/>
                    5折上新，95分专属抢购
                    低价折扣超值精选
                </li>
            </ul> */}
            
            <div className={css.ball}>
                
                <ul>
                <h2>最新评论</h2>
                    {
                        this.state.datalist.map((item, index) => <li key={index}>
                            <img src="http://shihuo.hupucdn.com/wx_user/avatar/1546239962/db23833e1f9f1a6ae91e5be0cb141cc3" alt=""/>
                            <p>{item.user_name}</p>
                            <p>{item.content}</p>
                            <p>{item.created_at}</p>


                        </li>)}
                </ul>
            </div>
        </div>
    }
    componentDidMount() {
        axios({
            url:'/comment/getComment',
            method:'POST',
            headers:{},
            data:'page=1&pageSize=6&productId=39215&typeId=6&light=true&replyPage=1&replySize=5&msgCommentId=0&msgReplyId=0'
          
        }).then(res=>{
            // console.log(res.data.data.res)
            // this.state.datalist = res.data.data.res
            this.setState({
                datalist:res.data.data.res
            })
        })
       
    }
}

export default HomeDetail