import React,{Component} from 'react';
import Tabbar from './Component/Tabbar'
import './App.css'
import {connect} from 'react-redux'
class App extends Component{
  render(){
    return (<div>
      {
        this.props.children
      }
      {
        this.props.isShow?
        <Tabbar/>
        :null
      }
    </div>)
  }
}
const mapStateToProps = (state)=>{
  // console.log(state)
  return {
    isShow:state.isShow
  }
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
