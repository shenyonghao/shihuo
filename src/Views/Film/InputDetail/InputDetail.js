import React, { Component } from 'react'
import axios from 'axios'
import css from './InputDetail.module.scss'
// import { PullToRefresh } from 'antd-mobile';


class InputDetail extends Component {
    state = {
        datalist: [],
        data:[]
    }
    render() {
        return <div className={css.InputDetail}>
           <header>

                    <button onClick={()=>{
                        this.props.history.push('/qk=d_sy')
                    }}>&lt;</button>

                    <input type="text" placeholder="\品牌" ref="username" onChange={()=>{
                        this.handle()
                    }}/>
                    <button onClick={()=>{
                        this.handleClick()
                    }}>搜索</button> 
            </header>
            

        </div>
    }
    // axios.get(`/search/hotSearch`).then(res=>{

    // })
        

    
    // componentDidMount() {
    //     axios.get(`/search?page=1&page_size=3&type=goods&keywords=${this.props.item}`).then(res => {
    //         console.log(res.data.data)
           
    //     })

        
}

export default InputDetail