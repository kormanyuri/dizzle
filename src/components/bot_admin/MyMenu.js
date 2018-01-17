import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import styles from '../../theme/admin/components/MyMenu';


class MyMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            className: typeof props.className !== 'undefined' ? props.className : '',
            welcome: typeof props.welcome !== 'undefined' ? props.welcome : '',
            avatar: typeof props.avatar !== 'undefined' ? props.avatar : '',
            open: typeof props.open !== 'undefined' ? props.open : 'false',
        };
    }


    closeMenu(){
        document.getElementById('menu').classList.remove('myMenuOpen');
    }

    render(){
        return (
            <div id="menu" className={classNames(this.props.classes.root, this.state.className)} >
                <div className={this.props.classes.menuHeader}>
                    <span className={this.props.classes.closeIco} onClick={() => this.closeMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-17 0 30 30" width="30" height="30" focusable="false" id="close-icon"><path strokeLinecap="round" strokeMiterlimit="10" d="M1.61 0c-.294-.01-.593.092-.827.31L.777.313C.31.748.283 1.474.717 1.94L4.553 6.07.37 9.957c-.468.434-.495 1.158-.06 1.625l.004.008c.434.467 1.16.494 1.625.06l4.185-3.886 3.887 4.185c.433.466 1.158.493 1.625.06l.008-.006c.466-.434.494-1.158.06-1.625L7.818 6.19l4.13-3.835c.468-.433.495-1.158.062-1.625l-.006-.007C11.57.256 10.846.23 10.38.663L6.245 4.5 2.41.37C2.193.135 1.903.01 1.61 0z" fill="#fff"></path></svg>
                    </span>
                </div>
                <div className={this.props.classes.welcome}>
                    <Avatar
                        src={this.state.avatar}
                        className={this.props.classes.avatar}
                    />
                    <span className={this.props.classes.title}>{this.state.welcome}</span>
                </div>
                <ul className={this.props.classes.menuList}>
                    <li><a href="/admin/dashboard">dashboard</a></li>
                    <li><a href="/admin/redeem">redeem</a></li>
                    <li><a href="/admin/invoices">invoice</a></li>
                    <li><a href="/admin/statement">statement</a></li>
                    <li><a href="/admin/store-credit-list">member store <br/>credit list</a></li>
                    <li><a href="/admin/profile">profile</a></li>
                    <li><a href="/admin/login">logout</a></li>
                </ul>
            </div>
        );
    }
}

MyMenu.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default withStyles(styles)(MyMenu);
