import React,{Component} from 'react'
import css from './index.module.scss'
import axios from 'axios'
import { Carousel,Tabs, WhiteSpace } from 'antd-mobile';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Flist from './Flist'


class Found extends Component{
  
    state = {
        datalist:[],
        dakai:true,
      }
      
      handClickdakai=()=>{
        this.setState({
          dakai:false
        })
      }
      handsrolltop=()=>{
        this.setState({
          datalist:[...this.state.datalist,...this.state.datalist]
        })
      }

      componentWillMount(){
          window.addEventListener('scroll', () =>{
          if(document.documentElement.scrollTop>document.documentElement.scrollHeight-1000){
            this.handsrolltop()
            console.log("111111")
          }
      })
      }
      
      
      
      componentDidMount() {
        // simulate img loading
        axios.get("/find/mobileList?tag_id=283&param_str=").then(res=>{
          console.log(res.data);
          this.setState({
            datalist:res.data.data
          })
         
          })
          new Swiper('.swiper-container', {
               slidesPerView: 3,
               spaceBetween: 30,
               pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
               },
             });
      }

    render(){
      
      const tabs = [
        { title: '今日推荐' },
        { title: '篮球' },
        { title: '视频' },
        { title: '最新资讯' },
        { title: '潮流风向' },
        { title: '3C新奇特' },
        { title: '潮鞋志' },
        { title: '球鞋90秒' }
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
          <div className={css.alin_div1_1}><a href="#">打开</a>
          <div className="alin_div1_1_del" onClick={this.handClickdakai}>×</div>
          </div>
          </div>
          :null}


        <Carousel
          autoplay={true}
          infinite
          className={css.lunbo_1}
        >
          <img className={css.lunbo_1} src="http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1" alt=""/>
          <img className={css.lunbo_1} src="http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1" alt=""/>
          <img className={css.lunbo_1} src="http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1" alt=""/>
          <img className={css.lunbo_1} src="http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1" alt=""/>
          <img src="http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1" alt=""/>
        </Carousel>

        <div className={css.alin_header}>
          <ul>
            <li><a>
              <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png" alt=""/>
              众测</a>
            </li>
            <li><a>
              <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png" alt=""/>
              栏目</a>
            </li>
            <li><a>
              <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png" alt=""/>
              最新</a>
            </li>
            <li><a>
              <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png" alt=""/>
              最热</a>
            </li>
            
          </ul>
        </div>

          <div className={css.title}>
            热门话题
          </div>  
          <div className={css.swiperdiv_1}>
          <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide"><a className={css.swiper}>
                  <img src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg" alt=""/>
                  <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
                </a></div>
      <div className="swiper-slide"><a className={css.swiper}>
                  <img src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg" alt=""/>
                  <p># 限时下单 全场返利 #</p>
                </a></div>
      <div className="swiper-slide"><a className={css.swiper}>
                  <img src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png" alt=""/>
                  <p># 晒照赢新年康扣 #</p>
                </a></div>
      <div className="swiper-slide"><a>
                  <p>查看更多</p>
                </a></div>

    </div>
  </div>
  </div>

  <div>
        <WhiteSpace/>
        <Tabs tabs={tabs}  onTabClick={this.handClickqiehuan} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5.5}  />}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace/>
      </div>

            <ul>
                {
                    this.state.datalist.map((item,index)=>{
                     return <div key={index}><Flist info={item} ></Flist></div>})
                }
            </ul>
                   
                {/* <button onClick={this.handsrolltop}>CLICK</button> */}

        </div>








    }
    


    handClickqiehuan=(a,b)=>{
      if(b===0){
         axios.get("/find/mobileList?tag_id=283&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            // console.log(this.state.datalist)
            })
            }

      if(b===1){
        return axios.get("/find/mobileList?tag_id=347&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            // console.log(this.state.datalist)
            })
            }
      if(b===2){
        return axios.get("/find/mobileList?tag_id=281&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            // console.log(this.state.datalist)
            })
            }
      if(b===3){
        return axios.get("/find/mobileList?tag_id=270&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            // console.log(this.state.datalist)
            })
            }
      if(b===4){
        return axios.get("/find/mobileList?tag_id=318&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            // console.log(this.state.datalist)
            })
            }
      if(b===5){
        return axios.get("/find/mobileList?tag_id=273&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            // console.log(this.state.datalist)
            })
            }
      if(b===6){
        return axios.get("/find/mobileList?tag_id=285&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            })
            }
      if(b===7){
        return axios.get("/find/mobileList?tag_id=136&param_str=").then(res=>{
            this.setState({
              datalist:res.data.data
            })
            })
            }    
            
            
    }

  //   deleteBtnClick(index){
  //     let tempList = this.state.attachList;
  //     tempList.splice(index,1)
  //     this.setState((prevState) =>{
  //         delete prevState.attachList;
  //         return prevState;
  //     })
  //     this.setState({
  //         attachList:tempList
  //     })

  // }


}




export default Found