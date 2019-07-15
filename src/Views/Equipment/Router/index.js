import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
// import SportsDetail from '../Detail/index';
// import RequestData from '../RequestData/index'
class Sports extends React.Component {
    render() {
        return <div>
            <Switch>
                <Route path="/sports/deteil/:id" component={SportsDetail}/>
                <Route path="/sports/deteil/:id" component={SportsDetail}/>
                {/* <Redirect from = "/film" to = "/film/coming"/> */}
                <Redirect from ="/sports" to = "/zhuangbei"/>
            </Switch>
            </div>
    }
}

export default Sports;