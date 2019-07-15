import React,{Component} from 'react'
import css from './index.module.scss'
import axios from 'axios'
import { Carousel,WhiteSpace,SearchBar,Tabs } from 'antd-mobile';
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Flist_1 from './Flist_1'
                                

class Preferential extends Component{
    state = {
        datalist:[],
        dakai:true,
      }
      handClickdakai=()=>{
        this.setState({
          dakai:false
        })
      }

      componentDidMount(){
        axios.get("/youhui/list?r=999&page=1&page_size=30&publish_date=").then(res=>{
            // console.log(res.data);
            this.setState({
              datalist:res.data.data
            })
            console.log(this.state.datalist);
           
            })
    }

    // handsrolltop=()=>{
    //     this.setState({
    //       datalist:[...this.state.datalist,...this.state.datalist]
    //     })
    //   }


    // componentWillMount(){
    //     window.addEventListener('scroll', () =>{
    //     if(document.documentElement.scrollTop>document.documentElement.scrollHeight-1000){
    //       this.handsrolltop()
    //       console.log("111111")
    //     }
    // })
    // }
    


    render(){
        const tabs = [
            { title: '精选' },
            { title: '鞋类' },
            { title: '服饰' },
            { title: '数码' },
            { title: '兴趣' },
          ];
        return <div className={css.allbox}>

        {this.state.dakai?
        <div className={css.alin_div1}>
         <Carousel
        autoplay={true}
        infinite
      >
        <div className={css.alin_div_1}>
          <img src="//sh1.hoopchina.com.cn/images/icons/logo_radius.png" alt="" width='.7rem' height='.7rem;'/>
          <p>识货APP ⋅ 全世界的运动好货</p>
          <p>获取运动装备最低价</p>
        </div>
        <div className={css.alin_div_1}>
          <img src="http://shihuo.hupucdn.com/trade/reposition/2018-12-07/100a624a5f086cc4e24db8da80566858.png" alt="" width='.7rem' height='.7rem;'/>
          <p>Nike Air Force 1</p>
          <p className={css.p_1}>￥399<span>5.0折</span><span>￥799</span></p>
        </div>
        <div className={css.alin_div_1}>
          <img src="http://shihuo.hupucdn.com/def/20181213/be44a72862bb3a40e8012b27c620ff471544681234.jpg" alt="" width='.7rem' height='.7rem;'/>
          <p> Air Jordan 11</p>
          <p className={css.p_1}>￥1388<span>8.7折</span><span>￥1599</span></p>
        </div>
        <div className={css.alin_div_1}>
          <img src="http://shihuo.hupucdn.com/def/20190221/e9d048b949f04866e8ae37ab355544101550739121.jpg" alt="" width='.7rem' height='.7rem;'/>
          <p>Nike Paul George PG 3</p>
          <p className={css.p_1}>￥509<span>6.0折</span><span>￥849</span></p>
        </div>
               

        </Carousel>
        <div className={css.alin_div1_1}><a href="">打开</a>
        <div className="alin_div1_1_del" onClick={this.handClickdakai}>×</div>
        </div>
        </div>
        :null}


        
        <SearchBar placeholder="搜索全网低价好券" maxLength={8} />
        
        <div className={css.div2}>
            <p>已收集 <span>0</span> 张优惠券</p><a></a>
        </div>

        <div className={css.div3}>
            <div className={css.div3_1}>
            <b>品牌特卖</b>
            <a>更多品牌 <img  alt="" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png"/></a>
            </div>
            <ul className={css.div3_ul1}>
            <li>
            <a>
                <img src="http://shihuo.hupucdn.com/appHome/201711/0113/705803887a16991348788bc77ef96298.png" alt=""/>
                <div>运动</div>
            </a>
            </li>
            <li>
            <a>
                <img src="http://shihuo.hupucdn.com/appHome/201711/0113/ed229a3887b997986de9d2fa99968f2c.png" alt=""/>
                <div>休闲</div>
            </a>
            </li>
            <li>
            <a>
                <img src="http://shihuo.hupucdn.com/appHome/201711/0113/3be9bb6590b50ae4c2c823353ebd1bb9.png" alt=""/>
                <div>户外</div>
            </a>
            </li>
            <li>
            <a>
                <img src="http://shihuo.hupucdn.com/appHome/201711/0113/26a9c61773702db21dbe4b9d9a5bed60.png" alt=""/>
                <div>数码</div>
            </a>
            </li>
            <li>
            <a>
                <img src="http://shihuo.hupucdn.com/appHome/201711/0113/487a7ff8df880418d15d3db5e4608a0f.png" alt=""/>
                <div>更多</div>
            </a>
            </li>
           
            </ul>


            <ul className={css.div3_ul2}>
                <li>
                    <a>
                        <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0811/8b50d3b1734f11c83f911a361c96d1b9.jpg"/>
                        <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/a8418a3ae650e7c5c76eea45f2a2bcc1.png"/>
                        <div>
                            日高
                        </div>
                        <div>
                            定金50抵450
                        </div>

                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0612/71cd68692b56ab4bd992716e2c010270.jpg"/>
                        <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/4ef177124aa7ba5eb5d6ef5c135ae057.png"/>
                        <div>
                            匹克
                        </div>
                        <div>
                            不止5折
                        </div>

                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0612/ecbb92938c6c2e81bf6d4825f82b5fd9.jpg"/>
                        <img alt="" src="http://shihuo.hupucdn.com/newslogo/201710/1814/cd232408542a3bafc7eb464f74909171.jpg"/>
                        <div>
                            dickies
                        </div>
                        <div>
                            满11减10元
                        </div>

                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0811/8f97c03a7fd2604d27568b087b8b5b59.jpg"/>
                        <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/6c79a6f7612a56c851451ca0f0929025.png"/>
                        <div>
                            铭瑄
                        </div>
                        <div>
                        虎扑专享满600减180
                        </div>

                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0811/985b1e7d8fc8eddc2a80c2b8b309ac2d.jpg"/>
                        <img alt="" src="http://shihuo.hupucdn.com/goods/style/201708/1716/bf41e50f5ace374682d8f9e104a9a953.png"/>
                        <div>
                            UA
                        </div>
                        <div>
                            虎扑专享满600减180
                        </div>

                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" src="http://shihuo.hupucdn.com/appHome/201801/0612/6751d06bc35a2e370f97982491bde549.jpg"/>
                        <img alt="" src="http://shihuo.hupucdn.com/newslogo/201710/2312/e08733467eb951d4ff57debfbf97396e.jpg"/>
                        <div>
                            Sony索尼
                        </div>
                        <div>
                            满48减10
                        </div>

                    </a>
                </li>

            </ul>

        </div>


        <div className={css.div4}>

            <p><b>超值9块9</b>
                <span>24小时淘不停</span>
                <a>更多商品
                    <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png" alt=""/>
                </a>
            </p>

            <div className={css.div4_div1}>
                <span>￥</span>
            </div>
            <a className={css.div4_a1}>
                <img src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png"  alt=""/>
            </a>

        </div>

        <WhiteSpace/>
        <Tabs tabs={tabs}  onTabClick={this.handClickqiehuan} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5.5}  />}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace/>
        
        <ul>
        {
             this.state.datalist.map((item,index)=>{
                return <Flist_1 info={item} key={index} ></Flist_1>})
        }
        </ul>


        </div>
    }

    handClickqiehuan=(a,b)=>{
        // console.log(this)
        if(b===0){
            axios.get("/youhui/list?r=999&page=1&page_size=30&publish_date=").then(res=>{
               this.setState({
                 datalist:res.data.data
               })
            // console.log(b)
               })
               }
   
         if(b===1){
           return axios.get("/youhui/list?r=1&page=1&page_size=30&publish_date=").then(res=>{
               this.setState({
                 datalist:res.data.data
               })
               // console.log(this.state.datalist)
               })
               }
         if(b===2){
           return axios.get("/youhui/list?r=2&page=1&page_size=30&publish_date=").then(res=>{
               this.setState({
                 datalist:res.data.data
               })
               // console.log(this.state.datalist)
               })
               }
         if(b===3){
           return axios.get("/youhui/list?r=3&page=1&page_size=30&publish_date=").then(res=>{
               this.setState({
                 datalist:res.data.data
               })
               // console.log(this.state.datalist)
               })
               }
         if(b===4){
           return axios.get("/youhui/list?r=4&page=1&page_size=30&publish_date=").then(res=>{
               this.setState({
                 datalist:res.data.data
               })
               // console.log(this.state.datalist)
               })
               }  
               
    }




}



export default Preferential