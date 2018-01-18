// @flow

import React from 'react';
import { render } from 'react-dom';
import Login from './pages/consumer/Login';
import PluginLogin from './pages/plugin/Login';
import PluginSignUp from './pages/plugin/SignUp';

import SignUp from './pages/consumer/SignUp';
import GroupBuyList from './pages/consumer/GroupBuyList';
import InGroupBuy from './pages/consumer/InGroupBuy';
import InGroupBuySuccessful from './pages/consumer/InGroupBuySuccessful';
import BalanceList from './pages/consumer/BalanceList';
import Transactions from './pages/consumer/Transactions';
import MyAccount from './pages/consumer/MyAccount';
import EditProfile from './pages/consumer/EditProfile';
import QRqode from './pages/consumer/Qr';
import RestoreStep1 from './pages/consumer/restore_password/RestoreStep1';
import RestoreStep2 from './pages/consumer/restore_password/RestoreStep2';
import TestPageA from './pages/consumer/TestPageA';
import TestPageB from './pages/consumer/TestPageB';


import GiftCardsList from './pages/plugin/GiftCardsList';
import Payment from './pages/plugin/Payment';
import OrderAccepted from './pages/plugin/OrderAccepted';
import OrderAcceptedInviteFriends from './pages/plugin/OrderAcceptedInviteFriends';
import InfGroup from './pages/plugin/InfGroup';
import PaymentBuyNow from './pages/plugin/PaymentBuyNow';
import PaymentBuyTogether from './pages/plugin/PaymentBuyTogether';
import Intro from './pages/plugin/Intro';


import withRoot from './components/admin/withRoot';
import LoginAdmin from './pages/admin/Login';
import SignUpAdmin from './pages/admin/SignUp';
import Dashboard from './pages/admin/Dashboard';
import Redeem from './pages/admin/Redeem';
import RedeemStep1 from './pages/admin/RedeemStep1';
import Profile from './pages/admin/Profile';
import ChangePassword from './pages/admin/ChangePassword';
import StoreAddress from './pages/admin/StoreAddress';
import DisplayCurrency from './pages/admin/DisplayCurrency';
import SetupStoreCreditIncentive from './pages/admin/SetupStoreCreditIncentive';
import PluginSetup from './pages/admin/PluginSetup';
import SmsInfo from './pages/admin/SmsInfo';
import Statement from './pages/admin/Statement';
import Invoice from './pages/admin/Invoice';
import StoreCreditList from './pages/admin/StoreCreditList';

import LoginBotAdmin from './pages/bot_admin/Login';
import SignUpBotAdmin from './pages/bot_admin/SignUp';
import SettingsBotAdmin from './pages/bot_admin/Settings';
import ShareToEmail from './pages/bot_admin/ShareToEmail';

import styles from './theme/admin/pages/Index';


// import { HashRouter,Route} from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Router, Route } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export default class Index extends React.Component {


    render(){
        return (
            <div style={{
                maxWidth: 414,
                margin: '0 auto',
                minHeight: '100vh',
                backgroundColor: '#f2f2f2'
            }}>

                <Router history={history}>
                    <div style={{minHeight: '100%', height: '100%'}}>
                        <Route exact path="/" component={GroupBuyList}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="/groupbuylist" component={GroupBuyList}/>
                        <Route exact path="/ingroupbuy/:id" component={InGroupBuy}/>
                        <Route exact path="/ingroupbuysuccessful/:id" component={InGroupBuySuccessful}/>
                        <Route exact path="/balancelist" component={BalanceList}/>
                        <Route exact path="/transactions/:shopperId" component={Transactions}/>
                        <Route exact path="/myaccount" component={MyAccount}/>
                        <Route exact path="/editprofile" component={EditProfile}/>
                        <Route exact path="/qr" component={QRqode}/>
                        <Route exact path="/restore-password-step-1" component={RestoreStep1}/>
                        <Route exact path="/restore-password-step-2" component={RestoreStep2}/>
                        <Route exact path="/test-page-a" component={TestPageA}/>
                        <Route exact path="/test-page-b" component={TestPageB}/>

                        <Route exact path="/plugin/login" component={PluginLogin}/>
                        <Route exact path="/plugin/login/:shopperId" component={PluginLogin}/>
                        <Route exact path="/plugin/intro/:shopperId" component={Intro}/>
                        <Route exact path="/plugin/sign-up/:shopperId" component={PluginSignUp}/>
                        <Route exact path="/plugin/gift-cards-list/:shopperId" component={GiftCardsList}/>
                        <Route exact path="/plugin/friend-buy/:groupBuyId" component={GiftCardsList}/>
                        <Route exact path="/plugin/inf-group/:id" component={InfGroup}/>
                        <Route exact path="/plugin/payment" component={Payment}/>
                        <Route exact path="/plugin/payment-buy-now" component={PaymentBuyNow}/>
                        <Route exact path="/plugin/payment-buy-together" component={PaymentBuyTogether}/>
                        <Route exact path="/plugin/order-accepted" component={OrderAccepted}/>
                        <Route exact path="/plugin/order-accepted-invite-friends" component={OrderAcceptedInviteFriends}/>


                        <Route exact path="/admin" component={LoginAdmin}/>
                        <Route exact path="/admin/login" component={LoginAdmin}/>
                        <Route exact path="/admin/login/:token" component={LoginAdmin}/>
                        <Route exact path="/admin/sign-up" component={SignUpAdmin}/>
                        <Route exact path="/admin/dashboard" component={Dashboard}/>
                        <Route exact path="/admin/redeem" component={Redeem}/>
                        <Route exact path="/admin/redeem-step-1/:consumerId/:balanceId" component={RedeemStep1}/>
                        <Route exact path="/admin/profile" component={Profile}/>
                        <Route exact path="/admin/change-password" component={ChangePassword}/>
                        <Route exact path="/admin/store-address" component={StoreAddress}/>
                        <Route exact path="/admin/display-currency" component={DisplayCurrency}/>
                        <Route exact path="/admin/store-credit-incentive" component={SetupStoreCreditIncentive}/>
                        <Route exact path="/admin/plugin-setup" component={PluginSetup}/>
                        <Route exact path="/admin/sms-info" component={SmsInfo}/>
                        <Route exact path="/admin/invoices" component={Invoice}/>
                        <Route exact path="/admin/statement" component={Statement}/>
                        <Route exact path="/admin/store-credit-list" component={StoreCreditList}/>

                        <Route exact path="/bot-admin" component={LoginBotAdmin}/>
                        <Route exact path="/bot-admin/login" component={LoginBotAdmin}/>
                        <Route exact path="/bot-admin/sign-up" component={SignUpBotAdmin}/>
                        <Route exact path="/bot-admin/settings" component={SettingsBotAdmin}/>
                        <Route exact path="/bot-admin/share-to-email" component={ShareToEmail}/>
                    </div>
                </Router>

            </div>
        )
    }
}

render(<Index />, document.querySelector('#root'));
