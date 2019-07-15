import React,{Component} from 'react'
import css from './index.module.scss'
import axios from 'axios'

class Flist_1 extends Component{

    render(){
        var item = this.props.info

        return <li className={css.li_1}>
            <a href={item.href}>
            <div>
                <img src={item.img}/>
            </div>


            <div>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                <p>{item.business}<span>{item.date}</span></p>
            </div>

            

            </a>
            </li>
    }
}


export default Flist_1