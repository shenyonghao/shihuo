import React,{Component} from 'react'
import css from './index.module.scss'
// import axios from 'axios'


class Flist extends Component{

    render(){
        var item = this.props.info
        
        return <li className={css.li_1}>
            <a href={item.data.href}>
          <div className={css.dv_1}>
              <img src={item.data.avatar} alt=""/>
            </div>
            <div className={css.dv_2}>
                <p>{item.data.author_name}</p>
                <p>{item.data.date}</p>
            </div>
            <div className={css.dv_3}>
                
                    <div className={css.dv_4}>
                        {item.data.title}
                    </div>
                    <p>
                        <img src={item.data.img} alt=""/>
                    </p>
                    <div>
                        <span className={css.span_1}>{item.data.praise}</span>
                        <span className={css.span_2}>{item.data.reply_count}</span>
                    </div>

                


            </div>


            </a>
        </li>  
    }
    

}




export default Flist