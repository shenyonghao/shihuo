import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ShowTabbar,HideTabbar} from './actionCreator'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
import { Modal, Button} from 'antd-mobile';
import axios from 'axios'
console.log(css)
class Register extends Component{
    state = {
        isShow:false,
        value:''
    }
    render(){
        return <div className={css.header}>
            <header>
                <NavLink to="/userqk=d_gr">&lt;</NavLink>
                <span>手机注册</span>
            </header>
            {
                this.state.isShow?
                <span className={css.title} ref="RegExp">手机号格式错误</span>
                :null
            }
            <div>
                <input type="text" placeholder="请输入大陆地区的手机号" ref="myvalue" onChange={this.chang}/>
            </div>


            <p>我已阅读并同意<a href="https://www.hupu.com/policies/sh_terms">虎扑识货用户协议(含隐私政策)</a>,系统将同步为您创建虎扑识货账号</p>

            <p>我已阅读并同意<a>虎扑识货用户协议(含隐私政策)</a>,系统将同步为您创建虎扑识货账号</p>

            <span className={css.Register}><Button className={css.aaa+' '+(this.state.value?css.red:'')}
                    onClick={() =>this.handleClick()            
                    }>
                注册
            </Button>
                </span>
            <p>温馨提示:</p>
            <p>账号注册成功后,您可以方便使用</p>
            <p>虎扑网、手机虎扑网、虎扑App、识货等服务</p> 
        </div>
    }
    
    handleClick=()=>{
        var reg = /^1[3|4|5|8][0-9]\d{4,8}$/
        if(this.refs.myvalue.value){
            if(reg.test(this.refs.myvalue.value)){
                console.log('满足要求')
               
                    // const alertInstance = alert('确认手机号码', `我们将发送校验码短信到这个号码: +86 ${this.refs.myvalue.value} `, [
                    //   { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                    //   { text: '继续', onPress: () => console.log('ok') },
                    // ]);
                    // setTimeout(() => {
                    //   // 可以调用close方法以在外部close
                    //   console.log('auto close');
                    //   alertInstance.close();
                    // }, 500000);
                 
                    const alertInstance = alert('确认手机号码', `我们将发送校验码短信到这个号码: +86 ${this.refs.myvalue.value} `, [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                        text: '继续',
                        onPress: () =>
                        new Promise((resolve) => {
                            alertInstance.close();
                            axios({
                                method:'post',
                                url:'/xiaoyu',
                                data:{
                                    username:this.refs.myvalue.value
                                }
                            }).then(res=>{
                                console.log(res.data)
                                if(res.data.ok === 1){
                                    alert('注册成功', '点击去登录', [
                                        // { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
                                        { text: 'OK', onPress: () => this.props.history.push('/login') },
                                      ]);
                                    // alert('注册成功')
                                    // this.props.history.push('/login')
                                }else{
                                    alert('该账号已被注册', '是否去登录', [
                                        { text: '返回', onPress: () => console.log('cancel'), style: 'default' },
                                        { text: '去登录', onPress: () => this.props.history.push('/login') },
                                      ]);
                                }
                            })
                        }),
                    },
                    ])
                    // setTimeout(() => {
                    //     // 可以调用close方法以在外部close
                    //     console.log('auto close');
                    //     alertInstance.close();
                    //   }, 3000);
               }else{
                   console.log('不满足要求')
                   this.setState({
                       isShow:true
                   })
               }
        }else{
            
        }
      
    }
    chang=()=>{
        console.log(this.refs.myvalue.value,this.refs.btn)
        this.setState({
            value:this.refs.myvalue.value
        })
    }
    componentWillMount(){
        this.props.hide()
    }
    componentDidMount(){
        console.log()
        console.log(this.refs.myvalue.value)

    }
    componentWillUnmount(){
        this.props.show()
    }
}
const alert = Modal.alert;
const mapDispatchToProps = {
    show:ShowTabbar,
    hide:HideTabbar
}
export default connect(null,mapDispatchToProps)(Register)