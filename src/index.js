// @flow

import React from 'react';
import { render } from 'react-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import GroupBuyList from './pages/GroupBuyList';
import InGroupBuy from './pages/InGroupBuy';
import InGroupBuySuccessful from './pages/InGroupBuySuccessful';
import BalanceList from './pages/BalanceList';
import Transactions from './pages/Transactions';
import MyAccount from './pages/MyAccount';
import EditProfile from './pages/EditProfile';
import QRqode from './pages/Qr';
import TestPageA from './pages/TestPageA';
import TestPageB from './pages/TestPageB';

import { HashRouter,Route} from 'react-router-dom';



export default class Index extends React.Component {


    render(){
        return (
            <div style={{minHeight: '100%', height: '100%'}}>

                <HashRouter>
                    <div style={{minHeight: '100%', height: '100%'}}>
                        <Route exact path="/" component={GroupBuyList}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="/groupbuylist" component={GroupBuyList}/>
                        <Route exact path="/ingroupbuy/:id" component={InGroupBuy}/>
                        <Route exact path="/ingroupbuysuccessful/:id" component={InGroupBuySuccessful}/>
                        <Route exact path="/balancelist" component={BalanceList}/>
                        <Route exact path="/transactions/:id" component={Transactions}/>
                        <Route exact path="/myaccount" component={MyAccount}/>
                        <Route exact path="/editprofile" component={EditProfile}/>
                        <Route exact path="/qr" component={QRqode}/>
                        <Route exact path="/test-page-a" component={TestPageA}/>
                        <Route exact path="/test-page-b" component={TestPageB}/>
                    </div>
                </HashRouter>

            </div>
        )
    }
}

render(<Index />, document.querySelector('#root'));
