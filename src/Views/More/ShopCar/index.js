import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ShowTabbar,HideTabbar} from '../Register/actionCreator'
class Shopcar extends Component{
    
    render(){
        return <div>
            <ul>
                
            </ul>
        </div>
    }
    componentWillMount(){
        this.props.hide()
    }
    componentWillUnmount(){
        this.props.show()
    }
}
const mapDispatchToProps = {
    show:ShowTabbar,
    hide:HideTabbar
}
export default connect(null,mapDispatchToProps)(Shopcar)