import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import {Provider} from 'react-redux'
import App from '../App'
import Home from '../Views/Film/index'
import Preferential from '../Views/Preferential/index'
import Found from '../Views/Found/index'
import Equipment from '../Views/Equipment/index'
import More from '../Views/More/index'
import Detail from '../Detail/index'
import store from '../Redux/store'
import Login from '../Views/More/Login/index'
import Register from '../Views/More/Register/index' 
import ShopCar from '../Views/More/ShopCar/index'
import SportsDetail from '../Views/Equipment/Detail/index'
import Basketball from '../Views/Film/Basketball/Basketball'
import Running from '../Views/Film/Running/Running';
import Playing from '../Views/Film/Playing/Playing';
import Soccer from '../Views/Film/Soccer/Soccer';
import Fashion from '../Views/Film/Fashion/Fashion';
import Digital from '../Views/Film/Digital/Digital';
import Input from '../Views/Film/Input/Input';
import HomeDetail from '../Views/Film/HomeDetail/HomeDetail';
import InputDetail from '../Views/Film/InputDetail/InputDetail';
const router = (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/qk=d_sy" component={Home}/>
                    <Route path="/youhuiqk=d_yh" component={Preferential}/>
                    <Route path="/find/indexqk=d_fx" component={Found}/>
                    <Route path="/zhuangbei/indexqk=d_zb" component={Equipment}/>
                    <Route path="/userqk=d_gr" component={More}/>
                    <Route path="/detail/:myid" component={Detail}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/sports/detail/:id" component={SportsDetail}/>
                    <Route path="/basketball" component={Basketball}/>
                    <Route path="/running" component={Running}/>
                    <Route path="/playing" component={Playing}/>
                    <Route path="/soccer" component={Soccer}/>
                    <Route path="/fashion" component={Fashion}/>
                    <Route path="/digital" component={Digital}/>
                    <Route path="/haitao/cart" component={ShopCar}/>
                    <Route path="/searchh" component={Input}/>
                    <Route path="/article/detail/:id" component={HomeDetail}/>
                    <Route path="/search/searchResult/allkeywords/:id" component={InputDetail}/>

                    <Redirect from="/" to="/qk=d_sy"/>
                </Switch>
            </App>
        </Router>
    </Provider>
)
export default router