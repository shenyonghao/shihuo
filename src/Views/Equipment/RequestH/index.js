import React,{Component} from 'react'
import css from './index.module.scss'
class RequestH extends Component{
    render(){
        return <div>
            <input className={css.import} type="text" value="搜索全网低价好券" />   
            <img className={css.moreImg} src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png" alt=""/>
            <ul className={css.upList}>
                <li><a>热销排行</a></li>
                <li><a>好评精选</a></li>
                <li><a>当季新款</a></li>
            </ul>
            <ul className={css.upListBg}>
                <li className={css.rightBg}><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" /></li>
                <li className={css.leftBg}><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"/></li>
                <p>篮球BASKETBALL<img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"/></p>
                <p>欧文低帮评测</p>
            </ul>
            <ul className={css.middleList1}>
                <li><a>篮球鞋</a></li>
                <li><a>篮球服饰</a></li>
                <li><a>篮球配件</a></li>
                <li><a>篮球</a></li>
                <li><a>Nike</a></li>
                <li><a>adidas</a></li>
                <li><a>Jordan</a></li>
                <li><a>全部</a></li>
            </ul>
            <ul className={css.middleList1Bg}>
                <li className={css.rightBgM}><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" /></li>
                <li className={css.leftBgM}><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"/></li>
                <p>跑步RUNNING<img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"/></p>
                <p>户外跑鞋选购</p>
            </ul>
            <ul className={css.middleList2}>
                <li><a>跑步鞋</a></li>
                <li><a>跑步服饰</a></li>
                <li><a>跑步配件</a></li>
                <li><a>运动补给</a></li>
                <li><a>adidas</a></li>
                <li><a>asics</a></li>
                <li><a>New Balance</a></li>
                <li><a>全部</a></li>
            </ul>
            <ul className={css.middleList2Bg}>
                <img src="http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1" alt=""/>
            </ul>
            <ul className={css.dowmList}>
                <li><a>鞋类</a></li>
                <li><a>服饰</a></li>
                <li><a>配件</a></li>
                <li><a>耳机</a></li>
                <li><a>Converse</a></li>
                <li><a>CASIO</a></li>
                <li><a>Vans</a></li>
                <li><a>全部</a></li>
            </ul> 
            <ul className={css.downListBg}>
                <img src="http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1" alt=""/>
            </ul>
            <ul className={css.choose}>
                <li><a>健身装备</a></li>
                <li><a>健身用品</a></li>
                <li><a>营养补给</a></li>
                <li><a>全部类目</a></li>
            </ul> 
        </div>
    }
}
export default RequestH;