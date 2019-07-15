import React,{Component} from 'react'
import axios from 'axios'
import DetailD from './DetailD/index'
import DetailM from './DetailM/index'
import DetailU from './DetailU/index'
class SportsDetail extends Component{
    state={
        data:[],
        list:[]
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get(`/sports/getComment?id=${this.props.match.params.id}`).then(res=>{
            console.log(res.data.data)
            this.setState({
               data:res.data.data.comments,
               list:res.data.data.tags
            })
        })
    }
    render(){
        return <div>
            <DetailU/>
            <ul>
                {
                    this.state.list.map(item=>
                    <DetailM key={item.id} info={item} {...this.state.list}></DetailM>
                    )
                }
            </ul>
            <ul>
                {this.state.data.map(item=>
                <DetailD key={item.product_id} info={item} {...this.state.data}></DetailD>)  
                }
            </ul>
        </div>
    }
}
export default SportsDetail