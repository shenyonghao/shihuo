import React,{Component} from 'react'
import css from './index.module.scss'
class DetailD extends Component{

    render(){
        var DD = this.props.info
        return <li className={css.DetailD}>
        <img className={css.DetailDI} src={DD.avatar} alt=""/> 
        <span>{DD.date}</span>
        <p>{DD.intro}</p>
        <div>
            {
                DD.img_attr.map((item,index)=>
                <img src={DD.img_attr[index]} key={item} alt=""/>
                )
            }
        </div>
        </li>
    }
}
export default DetailD