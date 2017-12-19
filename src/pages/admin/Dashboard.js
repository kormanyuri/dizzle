import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import MyCard from '../../components/admin/MyCard';

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/Dashboard';

import Auth from '../../components/Auth';
import Config from '../../Config';
import axios from 'axios';


class Dashboard extends React.Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            baseUrl: config.baseUrl,
            today: {
                totalMembers:0,
                totalRevenue:0,
                totalStoreCreditSold:0
            },
            total: {
                totalMembers:0,
                totalRevenue:0,
                totalStoreCreditSold:0
            },
            token: window.localStorage.getItem('shopper_token'),
            shopper: JSON.parse(window.localStorage.getItem('shopper'))
        }
    }

    componentWillMount(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper-statistic', {
            params: {
                token: this.state.token
            }
        })
            .then(response => {
                this.setState({
                    today: response.data.today,
                    total: response.data.total
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        return(
            <div>
                <MyAppBar title="dashboard" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name } avatar={logo}>
                    <MyCard id="mycard-1" paramName="total members" paramValue={this.state.total.totalMembers} indicatorValue="30%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-2" paramName="total Gift Card sold" paramValue={this.state.total.totalStoreCreditSold} indicatorValue="70%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-3" paramName="total Revenue" paramValue={`$` + this.state.total.totalRevenue} indicatorValue="60%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-4" paramName="today Gift Card sold" paramValue="$0" indicatorValue="20%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-5" paramName="today Revenue" paramValue={`$` + this.state.today.totalRevenue} indicatorValue="10%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                </MyPaper>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Dashboard));