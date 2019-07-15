import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
import {connect} from 'react-redux'
import {ShowTabbar,HideTabbar,ShowState,HideState} from './actionCreator'
import axios from 'axios'
import { Modal, Button} from 'antd-mobile';
class Login extends Component{
    state = {
        isfuhe:false
    }
    render(){
        return <div className={css.Login}>
                    <header>
                        <NavLink to="/userqk=d_gr">&lt;</NavLink>
                        <span><img src="https://passport.hupu.com/m/2/images/shihuo.png" alt=""/></span>
                    </header>
                    <main>
                        <section>
                            <input type="text" placeholder="登录名/手机号/邮箱" ref="username"/>
                            <Button onClick={() =>this.handleClick()}>
                                点击智能验证
                            </Button>  
                        </section>
                        <div>
                            <button onClick={()=>{this.props.history.push('/register')}}>注册</button>
                            <button onClick={()=>this.handledenglu()}>登录</button>
                        </div>
                    </main>
                </div>
    }

    handleClick = ()=>{
        axios({
            method:'POST',
            url:'/win',
            data:{
                username:this.refs.username.value
            }
        }).then(res=>{
            console.log(res.data)
            if(res.data.ok===1){
                const alert = Modal.alert;
                alert('智能验证', '验证成功', [
                // { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
                { text: 'OK', onPress: () => this.setState({
                    isfuhe:true
                }) },
                ])
                // this.props.history.push('/qk=d_sy')
            }else{
                const alert = Modal.alert;
                alert('智能验证', '验证失败', [
                // { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
                { text: 'OK', onPress: () => console.log('ok') },
                ])
                // this.props.history.push('/qk=d_sy')
            }
        })
    }
    handledenglu=()=>{
        // console.log('aaaa')
        if(this.state.isfuhe){
            this.props.registerShow()
            this.props.history.push('/userqk=d_gr')
        }else{
        }
    }
    componentWillMount(){
       this.props.hide()
    }
    componentWillUnmount(){
        this.props.show()
    }
}
const mapDispathToProps = {
    show:ShowTabbar,
    hide:HideTabbar,
    registerShow:ShowState,
    registerHide:HideState
}
export default connect(null,mapDispathToProps)(Login)