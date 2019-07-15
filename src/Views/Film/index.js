import React, { Component } from 'react'
import axios from 'axios'
import css from './index.module.scss'
import HomeSwiper from './Swiper/HomeSwiper//HomeSwiper'

import ListHome from './List/ListHome'
import { PullToRefresh } from 'antd-mobile';
// import {withRouter} from 'react-router-dom'
// console.log(css)
class Home extends Component {
    state = {
        datalist: [],
        data:[],
        height:document.documentElement.clientHeight,
        refreshing:false,
       
    }
    render() {

        return <div className={css.all}>

            <div className={css.swiper}>
                <div className={css.header}>
                    <input type="text" placeholder="搜索商品，品牌" onClick={() => {
                       this.props.history.push('/searchh')
                    }}/>
                    <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png" alt="" className={css.my} onClick={()=>{
                        this.props.history.push('/login')
                    }}/>
                </div>
                <HomeSwiper />
            </div>
            <ListHome myname={this.props}/>
            <ListHome/>
            <ul className={css.shoes}>
                <p className={css.day}>今日优惠</p>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto', 
                    }}
                    indicator={{ activate: '', deactivate: '' }}
                    direction={'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });
                        axios.get('/homefis/getNews?pageSize=20&param_str=1561770002%3A2%3A&type=&channel_type=').then(res=>{
                            this.setState({
                                data:[...this.state.data,...res.data.data]
                            })
                        })
                        setTimeout(()=>{
                            this.setState({
                                refreshing:false
                            })
                        },2000)

                    }}
                >

                    {
                        this.state.datalist.map((item, index) => {
                            return (
                                index < 3 ?
                                    <li key={index} onClick={()=>{
                                        this.props.history.replace('/article/detail/:id')
                                    }}>
                                        <img src={item.data.img} alt="" />
                                        <p>{item.data.title}</p>
                                        <p>{item.data.intro}</p>
                                        <p>{item.data.merchant}</p>
                                        <p>{item.data.price}</p>
                                    </li>
                                    :
                                    index < 6 ?
                                      
                                        <li className={css.pic}  key={index} onClick={()=>{
                                            this.props.history.replace("/youhuiqk=d_yh")
                                            localStorage.setItem("name","1")
                                            window.location.reload()
                                        }}>
                                            <img src={item.img} alt="" />
                                        </li>
                                    
                                        :
                                        <li key={index} onClick={()=>{
                                            this.props.history.replace('/article/detail/:id')
                                        }}>
                                            <img src={item.data.img} alt="" />
                                            <p>{item.data.title}</p>
                                            <p>{item.data.intro}</p>
                                            <p>{item.data.merchant}</p>
                                            <p>{item.data.price}</p>
                                        </li>
                            )
                        })
                    }
                     {
                        this.state.data.map((i,j) =>
                        
                        
                        <li key={j} onClick={()=>{
                            this.props.history.replace('/article/detail/:id')
                        }}>
                            <img src={i.data.img} alt=""/>
                            <p>{i.data.title}</p>
                            <p>{i.data.intro}</p>
                            <p>{i.data.merchant}</p>
                            <p>{i.data.price}</p>
                        </li>)
                    }
                </PullToRefresh>
            </ul>
        </div>
    }
    componentDidMount() {

        axios.get('/homefis/getNews?pageSize=20&param_str=&type=&channel_type=').then(res => {
            var arr = res.data.data
            var arr2 = res.data.youhui
            for (var i in arr2) {
                // console.log(arr2[i])
                arr.splice(3, 0, arr2[i])
            }
            // console.log(arr)
                this.setState({
                    refreshing: false,
                    datalist:arr
                })

            // this.setState({
            //     datalist:[...this.state.data,...this.state.data]

            // })
        })

    }
}
export default Home