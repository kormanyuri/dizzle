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

import Avatar1 from '../../img/admin/avatar-1.jpg';

import styles from '../../theme/admin/pages/SetupStoreCreditIncentive';

import Auth from '../../components/Auth';
import Config from '../../Config';
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
            giftCards:  []
        };

        this.loadGiftCards  = this.loadGiftCards.bind(this);
        this.deleteItem     = this.deleteItem.bind(this);
    }

    componentWillMount(){
        this.loadGiftCards();
    }

    changeValue(e, index) {
        let giftCards = this.state.giftCards;

        giftCards.map((item, key) => {
            if (item.index == index) {
                giftCards[key].giftCardValue = e.target.value;
                giftCards[key].changed = true;
            }
        });

        this.setState({
            giftCards: giftCards
        });
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
    }

    loadGiftCards(){
        axios.get(this.state.baseUrl + 'gift-card/rest/gift-card', {
            params: {
                method: 'LIST',
                shopperId: this.state.shopper.id
            }
        })
            .then(response => {
                console.log(response);


                const giftCards = [];

                if (typeof response.data.message == 'undefined') {
                    response.data.map((item, key) => {
                        if (item.status == 1) {
                            item.index = key;
                            giftCards.push(item);
                        }
                    });
                    this.setState({
                        giftCards: giftCards
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    addItem(){

        let giftCards = this.state.giftCards;

        giftCards.push(
            {index: giftCards.length, id: 0, giftCardValue: 100, giftCardDiscount: 0, changed: true}
        );

        this.setState({
            giftCards: giftCards
        });

        console.log(this.state);
    }

    del(item) {
        axios.post(this.state.baseUrl + 'gift-card/rest/gift-card', {
            id: item.id,
            giftCardValue:      item.giftCardValue,
            giftCardDiscount:   item.giftCardDiscount,
            shopperId: this.state.shopper.id,
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

        giftCards.map((item, key) => {
            if (item.index == index) {
                giftCards.splice(key, 1);
                this.del(item);
            }
        });

        this.setState({
            giftCards: giftCards
        });
    }

    save(){
        //redirect to /#/admin/profile
        let giftCards = this.state.giftCards;

        giftCards.map((item, key) => {

            axios.post(this.state.baseUrl + 'gift-card/rest/gift-card', {
                id:                 item.id,
                shopperId:          this.state.shopper.id,
                giftCardValue:      item.giftCardValue,
                giftCardDiscount:   item.giftCardDiscount
            })
                .then(response => {
                    console.log(response);
                    window.location = '/admin/profile';
                })
                .catch(error => {
                    console.log(error);
                });

        });
    }

    render(){
        let items = [];

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
                                        displayEmpty
                                        className={this.props.classes.selectEmpty}
                                        disableUnderline="true"
                                    >
                                        <MenuItem value={100}>100 USD</MenuItem>
                                        <MenuItem value={200}>200 USD</MenuItem>
                                        <MenuItem value={300}>300 USD</MenuItem>
                                        <MenuItem value={400}>400 USD</MenuItem>
                                        <MenuItem value={500}>500 USD</MenuItem>
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


        return(
            <div>
                <MyAppBar title="setup gift card" />
                <MyPaper title={`Namaste, ` + this.state.shopper.name} avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>setup gift card incentive</div>
                        <div>
                            {items}
                        </div>
                    <Button color="primary" className={this.props.classes.fullWidth} style={{marginBottom: 40,}} onClick={this.addItem.bind(this)}>Add line</Button>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.save.bind(this)}>Save</Button>
                </MyPaper>
            </div>
        );
    }
}

SetupStoreCreditIncentive.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(SetupStoreCreditIncentive));