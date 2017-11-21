// @flow

import React from 'react';
import { render } from 'react-dom';
import Login from './pages/consumer/Login';
import PluginLogin from './pages/plugin/Login';
import SignUp from './pages/consumer/SignUp';
import GroupBuyList from './pages/consumer/GroupBuyList';
import InGroupBuy from './pages/consumer/InGroupBuy';
import InGroupBuySuccessful from './pages/consumer/InGroupBuySuccessful';
import BalanceList from './pages/consumer/BalanceList';
import Transactions from './pages/consumer/Transactions';
import MyAccount from './pages/consumer/MyAccount';
import EditProfile from './pages/consumer/EditProfile';
import QRqode from './pages/consumer/Qr';
import TestPageA from './pages/consumer/TestPageA';
import TestPageB from './pages/consumer/TestPageB';


import GiftCardsList from './pages/plugin/GiftCardsList';
import Payment from './pages/plugin/Payment';
import OrderAccepted from './pages/plugin/OrderAccepted';
import OrderAcceptedInviteFriends from './pages/plugin/OrderAcceptedInviteFriends';
import InfGroup from './pages/plugin/InfGroup';
import PaymentBuyNow from './pages/plugin/PaymentBuyNow';
import PaymentBuyTogether from './pages/plugin/PaymentBuyTogether';

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

                        <Route exact path="/plugin/login" component={PluginLogin}/>
                        <Route exact path="/plugin/login/:shopperId" component={PluginLogin}/>
                        <Route exact path="/plugin/gift-cards-list/:shopperId" component={GiftCardsList}/>
                        <Route exact path="/plugin/friend-buy/:groupBuyId" component={GiftCardsList}/>
                        <Route exact path="/plugin/inf-group/:id" component={InfGroup}/>
                        <Route exact path="/plugin/payment" component={Payment}/>
                        <Route exact path="/plugin/payment-buy-now" component={PaymentBuyNow}/>
                        <Route exact path="/plugin/payment-buy-together" component={PaymentBuyTogether}/>
                        <Route exact path="/plugin/order-accepted" component={OrderAccepted}/>
                        <Route exact path="/plugin/order-accepted-invite-friends" component={OrderAcceptedInviteFriends}/>

                    </div>
                </HashRouter>

            </div>
        )
    }
}

render(<Index />, document.querySelector('#root'));
