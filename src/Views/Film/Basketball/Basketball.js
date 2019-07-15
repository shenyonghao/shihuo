import React, { Component } from 'react'
import axios from 'axios'
import css from './Basketball.module.scss'
// import { PullToRefresh} from 'antd-mobile';



class Basketball extends Component {
    state = {
        refreshing: false,
        height:document.documentElement.clientHeight,
        down:true,
        datalist: []
    }
    render() {
        return <div className={css.basketball}>
            <header>
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt="" onClick={() => {
                    // this.props.myname.history.push('/qk=d_sy')
                    window.location.href = '/qk=d_sy'
                }} />
                <h2>篮球专区</h2>
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
         
            {/* <PullToRefresh 
                damping={60}
                ref={el => this.ptr = el}
                style={{
                height:'500px',
                background:'#f0f',
                overflow: 'auto',
                }}
                // indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                direction={this.state.down?'down':'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                this.setState({ refreshing: true });    
                console.log("111")
                axios.get('/sports/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=').then(res => {
                    console.log(res.data.data)
                    this.setState({
                        datalist: [...this.state.datalist,...res.data.data]
                    })
                })

                setTimeout(() => {
                    this.setState({ refreshing: false });
                }, 1000);
                }}
               
            >
                 {
                    this.state.datalist.map((item,j)=><li key={j}> {item.data.price}</li>)
                }
                 </PullToRefresh> */}

            <div className={css.ball}>
                <ul>
                    {
                        this.state.datalist.map((item, index) => <li key={index}>

                            <img src={item.data.img} alt={item} />
                            <div className={css.text}>
                                <h2>
                                    {item.data.title}
                                </h2>
                                <p>
                                    {item.data.merchant}
                                    <span>
                                        {item.data.price}
                                    </span>
                                </p>
                            </div>

                        </li>)}
                        </ul>
            </div>
                
           
           
            {/* {
                        this.state.datalist.map((item, index) => <li key={index}>

                            <img src={item.data.img} alt={item} />
                            <div className={css.text}>
                                <h2>
                                    {item.data.title}
                                </h2>
                                <p>
                                    {item.data.merchant}
                                    <span>
                                        {item.data.price}
                                    </span>
                                </p>
                            </div>

                        </li>)} */}
            
        </div>
    }


    componentDidMount() {
        axios.get('/sports/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=').then(res => {
            console.log(res.data.data)
            this.setState({
                datalist:res.data.data
            })
        })
    }
}

export default Basketball