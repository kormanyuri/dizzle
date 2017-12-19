import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import CircleButton from './CircleButton';

import styles from '../../theme/admin/components/MyCard';


class MyCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            classes: '',
            children: typeof props.children !== 'undefined' ? props.children : '',
            className: typeof props.className !== 'undefined' ? props.className : '',
            paramName: typeof props.paramName !== 'undefined' ? props.paramName : '',
            paramValue: typeof props.paramValue !== 'undefined' ? props.paramValue : '',
            indicatorValue: typeof props.indicatorValue !== 'undefined' ? props.indicatorValue : '0%',
            id: typeof props.id !== 'undefined' ? props.id : '',
        };
    }

    componentWillReceiveProps(props){
        this.state = {
            classes: '',
            children: typeof props.children !== 'undefined' ? props.children : '',
            className: typeof props.className !== 'undefined' ? props.className : '',
            paramName: typeof props.paramName !== 'undefined' ? props.paramName : '',
            paramValue: typeof props.paramValue !== 'undefined' ? props.paramValue : '',
            indicatorValue: typeof props.indicatorValue !== 'undefined' ? props.indicatorValue : '0%',
            id: typeof props.id !== 'undefined' ? props.id : '',
        };
    }

    toggleInf(){
        let myCardInfBlock = document.querySelector('#'+this.state.id+' .'+this.props.classes.myCardInf);
        let showInfBtn = document.querySelector('#'+this.state.id+' .'+this.props.classes.showInfBtn);
        myCardInfBlock.classList.toggle(this.props.classes.myCardInfShow);
        showInfBtn.classList.toggle(this.props.classes.showInfBtnActive);
    }

    render(){
        return (
            <div id={this.state.id} className={this.props.classes.root}>
                <div
                    className={classNames(
                    this.state.className,
                )}
                >
                    <div className={this.props.classes.indicator}>
                        <div style={{width:this.state.indicatorValue}}></div>
                    </div>
                    <div>
                        <Grid container>
                            <Grid item xs={10}>
                                <div className={this.props.classes.paramValue}>{this.state.paramValue}</div>
                                <div className={this.props.classes.paramName}>{this.state.paramName}</div>
                            </Grid>
                            <Grid item xs={2}>
                                <CircleButton className={this.props.classes.showInfBtn} onClick={this.toggleInf.bind(this)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.48171" height="8.4999788" viewBox="0 0 3.48171 8.4999788" id="svg2"><path d="M2.5 0c-.27 0-.5.097-.694.29-.193.196-.29.43-.29.703 0 .274.097.508.29.702.194.19.424.285.694.285.27 0 .5-.094.69-.285.194-.194.292-.428.292-.702 0-.273-.098-.507-.292-.702C3 .098 2.77 0 2.5 0zm-.915 2.878c-.22 0-.453.042-.7.13-.246.08-.505.18-.776.3L0 3.795c.08-.033.175-.068.285-.104.114-.035.222-.052.33-.052.216 0 .364.038.44.117.077.08.116.22.116.423 0 .11-.013.234-.04.37-.023.134-.053.276-.09.427L.63 6.55c-.037.166-.064.316-.08.45-.017.128-.026.256-.026.382 0 .324.11.593.33.805.224.21.537.313.937.313.26 0 .488-.038.685-.113.197-.072.462-.18.792-.32l.11-.486c-.058.03-.15.065-.276.105-.126.036-.24.053-.34.053-.213 0-.363-.036-.45-.112-.086-.075-.13-.22-.13-.428 0-.083.014-.204.04-.366.028-.16.057-.306.09-.432l.41-1.57c.04-.143.068-.302.082-.474.016-.173.025-.294.025-.362 0-.33-.11-.6-.327-.804-.213-.208-.518-.312-.914-.312z" fill="#877650"/></svg>
                                </CircleButton>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={this.props.classes.myCardInf}>
                        {this.state.children}
                    </div>
                </div>
            </div>
        );
    }
}

MyCard.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.string,
};

export default withStyles(styles)(MyCard);
