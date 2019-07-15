import React,{Component} from 'react'
import axios from 'axios'
import RequestData from './RequestData';
import RequestH from './RequestH'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
import qs from 'qs'
class Equipment extends Component{
    ptr:null
    // state={
    //     datalist:[],
    //     page:1,
    //     refreshing:false,
      
    // }

    state = {
        datalist:[],
        page:1,
        refreshing:false,
        height:`700px`
    }
   
    componentDidMount(){
        axios.post("/zhuangbei/getHomeNews",qs.stringify({
            page:this.state.page
        })).then(res=>{
            console.log(res.data.data)
            this.setState({
                datalist:res.data.data,
                page:this.state.page+1,
            })
        // axios({
        //    method:'post',
        //     url:"/zhuangbei/getHomeNews",
        //   data:{
        //        ,
        //   }
        // })
       })
      
    }
    
    render(){
        return <div>
        <RequestH/>
        <div className={css.latest}>最新推荐</div>
        {/* <ul className={css.EquipmentD}>
            {
            this.state.datalist.map(item=>
            <RequestData key={item.data.href} info ={item} {...this.state.datalist}></RequestData>)
            }
        </ul> */}
        <ul className={css.EquipmentD}> 
        <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{
                height:this.state.height,
                overflow: 'auto',
            }}
            indicator={{activate:"加载",deactivate:"加载完成"}}
            direction={'up'}
            refreshing={this.state.refreshing}
            onRefresh={() => {
                this.setState({ refreshing: true });
                axios.post("/zhuangbei/getHomeNews",qs.stringify({
                    page:this.state.page
                })).then(res=>{
                    console.log(res.data.data)
                    this.setState({
                        datalist:[...this.state.datalist,...res.data.data]
                })
                })
            setTimeout(() => {
                        this.setState({
                            page:this.state.page+1,
                            refreshing: false,
                        })
            }, 1000)
            }}
        >
                {
                this.state.datalist.map(item=>
                <RequestData key={item.data.href} info ={item} {...this.state.datalist}></RequestData>)
                }       
        </PullToRefresh>
        </ul>  
        </div>
    }
}

export default Equipment;