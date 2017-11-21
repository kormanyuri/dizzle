import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import MyCard from '../components/MyCard';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/Dashboard';


class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <MyAppBar
                    title="dashboard"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <MyCard id="mycard-1" paramName="total members" paramValue="1.202" indicatorValue="30%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-2" paramName="total Store Credit sold" paramValue="$999.00" indicatorValue="70%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-3" paramName="total Revenue" paramValue="$805.00" indicatorValue="60%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-4" paramName="today Store Credit sold" paramValue="$103.00" indicatorValue="20%">
                        short description appears when user taps\clicks on (i) information icon. White border expands smoothly. Description text is about this window - total members
                    </MyCard>
                    <MyCard id="mycard-5" paramName="today Revenue" paramValue="$91.00" indicatorValue="10%">
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