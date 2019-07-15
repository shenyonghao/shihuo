import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import css from './Input.module.scss'
class Input extends Component {
    state = {
        datalist: [],
        data: []
    }
    render() {

        return <div className={css.InputContent}>
            <header>

                <button onClick={() => {
                    this.props.history.push('/qk=d_sy')
                }}>&lt;</button>

                <input type="text" placeholder="搜索商品，品牌" ref="username" onChange={() => {
                    this.handle()
                }} />
                <button onClick={() => {
                    this.handleClick()
                }}>搜索</button>
            </header>
            {
                this.state.datalist.length===0?
                <div>
                    <p>热门搜索</p>
                    <ul className={css.hotsearch}>
                        {
                            this.state.data.map((i, j) => <li key={j}>{i.name}</li>)
                        }
                    </ul>
                </div>
                :null
            }
            

            <ul className={css.searchkey}>
                {
                    this.state.datalist.map((item, index) => <li key={index} onClick={() =>
                        this.click(item)
                    }>{item}</li>)
                }
            </ul>


            


        </div>
    }
    handle = () => {
        console.log(this.refs.username.value)
        axios({
            url: `/search/relatedKeywords?keywords=${this.refs.username.value}`,
            methods: "GET"

        }).then(res => {
            this.setState({
                datalist: res.data.data
            })
        })
    }

    componentDidMount() {
        axios.get('/search/hotSearch').then(res => {
            console.log(res.data)
            this.setState({
                data:res.data.data
            })
        })
    }


    // handleClick=()=>{
    //     console.log(this.state.datalist)
    //     axios({
    //         url:`/search?page=1&page_size=30&type=news&keywords=${this.state.datalist}`,
    //         Method: 'GET'

    //     }).then(res=>{

    //     })
    // }

    click = (item) => {
        // console.log(item)
        this.props.history.replace(`/search/searchResult/allkeywords/${item}`)
        window.location.reload()
    }
}

export default withRouter(Input)