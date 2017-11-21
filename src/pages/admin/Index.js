import React from 'react';
import { HashRouter,Route} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Redeem from './Redeem';
import RedeemStep1 from './RedeemStep1';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import StoreAddress from './StoreAddress';
import DisplayCurrency from './DisplayCurrency';
import SetupStoreCreditIncentive from './SetupStoreCreditIncentive';
import PluginSetup from './PluginSetup';
import SmsInfo from './SmsInfo';
import Statement from './Statement';
import StoreCreditList from './StoreCreditList';

import styles from '../theme/pages/Index';


class Index extends React.Component {
    render(){
        return(
            <div className={this.props.classes.wrapper}>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Login}></Route>
                        <Route exact path="/sign-up" component={SignUp}></Route>
                        <Route exact path="/dashboard" component={Dashboard}></Route>
                        <Route exact path="/redeem" component={Redeem}></Route>
                        <Route exact path="/redeem-step-1" component={RedeemStep1}></Route>
                        <Route exact path="/profile" component={Profile}></Route>
                        <Route exact path="/change-password" component={ChangePassword}></Route>
                        <Route exact path="/store-address" component={StoreAddress}></Route>
                        <Route exact path="/display-currency" component={DisplayCurrency}></Route>
                        <Route exact path="/store-credit-incentive" component={SetupStoreCreditIncentive}></Route>
                        <Route exact path="/plugin-setup" component={PluginSetup}></Route>
                        <Route exact path="/sms-info" component={SmsInfo}></Route>
                        <Route exact path="/statement" component={Statement}></Route>
                        <Route exact path="/store-credit-list" component={StoreCreditList}></Route>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Index));