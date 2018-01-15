import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../components/admin/withRoot';
import MyPaper from '../../components/admin/MyPaper';
import MyAppBar from '../../components/admin/MyAppBar';
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';


import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/SetupStoreCreditIncentive';

import Auth from '../../components/Auth';
import Config from '../../Config';
import Core from  '../../utils/Core';
import axios from 'axios';

class SetupStoreCreditIncentive extends React.Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            startValue: '',
            endValue:   '',
            baseUrl:    config.baseUrl,
            shopper:    JSON.parse(window.localStorage.getItem('shopper')),
            giftCards:  [],
            values:     [
                {selected: false, value:100},
                {selected: false, value:200},
                {selected: false, value:300},
                {selected: false, value:400},
                {selected: false, value:500}
            ],
            alert: {
                open: false,
                message: <span id="message-id">Error</span>
            }
        };

        //fixed old version
        if (typeof this.state.shopper.currency == 'undefined') {
            this.state.shopper.currency = 'USD';
            window.localStorage.setItem('shopper', JSON.stringify(this.state.shopper));
        }

        this.loadGiftCards  = this.loadGiftCards.bind(this);
        this.deleteItem     = this.deleteItem.bind(this);
    }

    componentWillMount(){
        this.loadGiftCards();
    }

    changeValue(e, index) {
        let giftCards = this.state.giftCards;
        let values    = this.state.values;
        //
        // const indexVal = values.indexOf(e.target.value);
        //
        // if (indexVal > -1) {
        //     values.splice(indexVal, 1);
        // }

        //console.log(index, e.target.value);

        this.state.values.map((item, key) => {
            //console.log(item);
            if (item.value == e.target.value) {

                values[key].selected = true;
                this.setState({
                    values: values
                });
                //console.log(values);
            }
        });



        giftCards.map((item, key) => {
            if (item.index == index) {
                giftCards[key].giftCardValue = e.target.value;
                giftCards[key].changed = true;
                giftCards[key].selected = true;
                //console.log('selected', giftCards[key])
            }
        });

        //console.log(giftCards);

        this.setState({
            giftCards: giftCards,
            //values: values
        });

        this.save();
    }

    prevValue(e, index) {
        if (typeof e.target.value != 'undefined') {
            //console.log(e.target.value, index);
            let values    = this.state.values;
            //
            // const indexVal = values.indexOf(e.target.value);
            //
            // if (indexVal > -1) {
            //     values.splice(indexVal, 1);
            // }

            console.log(index, e.target.value);

            this.state.values.map((item, key) => {
                //console.log(item);
                if (values[key].selected == true && item.value == e.target.value) {

                    values[key].selected = false;
                    this.setState({
                        values: values
                    });
                    //console.log(values);
                }
            });
        }
    }

    changeDiscount(e, index) {
        let giftCards = this.state.giftCards;


        giftCards.map((item, key) => {
            if (item.index == index) {
                giftCards[key].giftCardDiscount = e.target.value;
                giftCards[key].changed = true;
            }
        });

        this.setState({
            giftCards: giftCards
        });

        this.save();
    }

    loadGiftCards(){
        axios.get(this.state.baseUrl + 'gift-card/rest/gift-card', {
            params: {
                method: 'LIST',
                shopperId: this.state.shopper.id
            }
        })
            .then(response => {
                //console.log(response);


                const giftCards = [];

                if (typeof response.data.message == 'undefined') {
                    //selected values
                    let values = this.state.values;

                    response.data.map((item, key) => {
                        if (item.status == 1) {
                            item.index = key;

                            giftCards.push(item);

                            this.state.values.map((val, _key) => {
                                if (val.value == item.giftCardValue) {
                                    values[_key].selected = true;
                                }
                            });
                        }
                    });

                    this.setState({
                        giftCards: giftCards,
                        values: values
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    addItem(){

        let giftCards = this.state.giftCards;
        let giftCardDefaultValue = 0;
        let values = this.state.values;
        //console.log(values);

        this.state.values.map((item, key) => {
            if (item.selected == false) {
                if (giftCardDefaultValue == 0) {
                    giftCardDefaultValue = item.value;

                    values[key].selected = true;
                    this.setState({
                        values: values
                    });
                }
            }
        });

        if (giftCardDefaultValue != 0) {
            giftCards.push(
                {
                    index: giftCards.length,
                    id: 0,
                    giftCardValue: giftCardDefaultValue,
                    giftCardDiscount: 0,
                    changed: true
                }
            );

            this.setState({
                giftCards: giftCards
            });

            this.save();
        } else {
            //error
            this.setState({
                alert: {
                    message: 'Not allow add more gift card incentive',
                    open: true
                }
            });

            setTimeout(() => {
                this.setState({
                    alert: {
                        message: '',
                        open: false
                    }
                })
            }, 3000);

        }
        //console.log(this.state);
    }

    del(item) {
        axios.post(this.state.baseUrl + 'gift-card/rest/gift-card', {
            id: item.id,
            giftCardValue:      item.giftCardValue,
            giftCardDiscount:   item.giftCardDiscount,
            shopperId:          this.state.shopper.id,
            status: 0
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteItem(index){
        //alert(index);
        let giftCards = this.state.giftCards;
        let values = this.state.values;



        giftCards.map((item, key) => {
            if (item.index == index) {
                giftCards.splice(key, 1);
                this.del(item);

                //update values
                values.map((valItem, valKey) => {

                    if (valItem.value == item.giftCardValue) {
                        values[valKey].selected = false;
                        this.setState({
                            values: values
                        });
                    }

                });
            }
        });

        this.setState({
            giftCards: giftCards
        });

        this.save();
    }


    save(){
        //redirect to /#/admin/profile
        let giftCards = this.state.giftCards;

        giftCards.map((item, key) => {

            if (item.giftCardDiscount !== '') {
                axios.post(this.state.baseUrl + 'gift-card/rest/gift-card', {
                    id: item.id,
                    shopperId: this.state.shopper.id,
                    giftCardValue: item.giftCardValue,
                    giftCardDiscount: item.giftCardDiscount
                })
                    .then(response => {
                        //console.log(response);
                        giftCards[key].id = response.data.giftCardId;
                        this.setState({
                            giftCards: giftCards
                        });

                        //window.location = '/admin/profile';
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    }


    render(){
        let items  = [];
        let values = [];

        this.state.values.map((item, key) => {
            if (item.selected) {
                values.push(
                    <MenuItem key={key} value={item.value} style={{backgroundColor: '#ff9999'}} disabled={true}>{item.value} {this.state.shopper.currency}</MenuItem>
                );
            } else {
                values.push(
                    <MenuItem key={key} value={item.value}>{item.value} {this.state.shopper.currency}</MenuItem>
                );
            }
        });

        this.state.giftCards.map((item, key) => {
            items.push(
                <div key={key} className={this.props.classes.inputRow}>
                    <div style={{ marginRight: 33}}>
                        <Grid container spacing={8}>
                            <Grid item xs={6}>
                                <FormControl className={this.props.classes.formControl}>
                                    <Select
                                        value={item.giftCardValue}
                                        onChange={((e, id) => this.changeValue(e, item.index)).bind(this)}
                                        onFocus={((e, id) => this.prevValue(e, item.index)).bind(this)}
                                        displayEmpty
                                        className={this.props.classes.selectEmpty}
                                        disableUnderline="true"
                                    >
                                        {values}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth className={this.props.classes.formControl}>
                                    <InputLabel htmlFor="spent">Spent</InputLabel>
                                    <Input
                                        id="spent"
                                        className={this.props.classes.labelInputInline}
                                        disableUnderline="true"
                                        value={item.giftCardDiscount}
                                        onChange={((e, id) => this.changeDiscount(e, item.index)).bind(this)}
                                        startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={this.props.classes.deleteRowBtn} onClick={ id => this.deleteItem(item.index) }>
                        <span>-</span>
                    </div>
                </div>
            );
        });

        let logo = this.state.shopper.logo;

        if (logo == '') {
            logo = Avatar1;
        } else {
            logo = '/backend/uploads/logos/' + logo
        }

        return(

            <div>
                <MyAppBar title="setup gift card" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={logo}>
                    <div className={this.props.classes.titleForm}>setup gift card incentive</div>
                        <div>
                            {items}
                        </div>
                    <Button color="primary" className={this.props.classes.fullWidth} style={{marginBottom: 40,}} onClick={this.addItem.bind(this)}>Add line</Button>
                    {/*<Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Save</Button>*/}
                </MyPaper>

                <Snackbar
                    className={this.props.classes.message}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.state.alert.open}
                    onRequestClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={this.state.alert.message}
                />
            </div>
        );
    }
}

SetupStoreCreditIncentive.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(SetupStoreCreditIncentive));