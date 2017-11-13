// @flow

import React from 'react';
import { render } from 'react-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import GroupBuyList from './pages/groupbuylist';
import InGroupBuy from './pages/ingroupbuy';
import InGroupBuySuccessful from './pages/ingroupbuysuccessful';
import BalanceList from './pages/balancelist';
import Starbucks from './pages/starbucks';
import MyAccount from './pages/myaccount';
import EditProfile from './pages/editprofile';
import QRqode from './pages/qr';

import { HashRouter,Route} from 'react-router-dom';



export default class Index extends React.Component {


    render(){
        return (
            <div style={{minHeight: '100%', height: '100%'}}>


                <HashRouter>
                    <div style={{minHeight: '100%', height: '100%'}}>
                        <Route exact path="/" component={GroupBuyList}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/groupbuylist" component={GroupBuyList}></Route>
                        <Route exact path="/ingroupbuy" component={InGroupBuy}></Route>
                        <Route exact path="/ingroupbuysuccessful" component={InGroupBuySuccessful}></Route>
                        <Route exact path="/balancelist" component={BalanceList}></Route>
                        <Route exact path="/starbucks" component={Starbucks}></Route>
                        <Route exact path="/myaccount" component={MyAccount}></Route>
                        <Route exact path="/editprofile" component={EditProfile}></Route>
                        <Route exact path="/qr" component={QRqode}></Route>
                    </div>
                </HashRouter>

            </div>
        )
    }
}

render(<Index />, document.querySelector('#root'));
