/**
 * Created by korman on 12.01.18.
 */
import axios from 'axios';
import Config from '../Config';

export default class Shopper
{
    constructor(shopperId) {
        const config = new Config();
        this.state = {
            // alert: {
            //     open: true,
            //     message: ''
            // },
            shopperId: shopperId,
            baseUrl: config.baseUrl
        };
    }

    changePassword(password, retryPassword) {
         return new Promise((resolve, reject) => {
             if (password == '' || !retryPassword) {

                 reject(new Error('Please fill fields'));

             } else {

                 if (password == retryPassword) {

                     axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopperId, {
                         password: password,
                         retryPassword: retryPassword
                     })
                         .then(() => {
                             resolve('Changed successful');
                         })
                         .catch((error) => {
                             reject(new Error(error.response.data.message));
                         });

                 } else {
                     reject(new Error('Password and Retry Password not equals'));
                 }

             }
        });
    }

    changeName(name) {
        return new Promise((resolve, reject) => {
            axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopperId, {
                name: name
            })
                .then(() => {

                    let shopper = JSON.parse(window.localStorage.getItem('shopper'));
                    shopper.name = name;
                    window.localStorage.setItem('shopper', JSON.stringify(shopper));

                    resolve('Save shopper name successful');
                })
                .catch(error => {
                    reject(new Error(error.response.data.message));
                });
        });
    }

    changeLogo() {
        return new Promise((resolve, reject) => {
            // console.log(e.target .files[0]);
            let fileObject = e.target.files[0];
            let formData = new FormData();
            formData.append('image', fileObject);
            //console.log(formData);

            axios.post(this.state.baseUrl + 'image/upload/logo', formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })
                .then(response => {
                    let shopper = this.state.shopper;
                    shopper.logo = response.data[0];
                    this.setState({
                        shopper: shopper
                    });

                    window.localStorage.setItem('shopper', JSON.stringify(this.state.shopper));

                    axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
                        logo:    shopper.logo
                    })
                        .then(() => {
                            resolve('Shopper Logo save successful');
                        })
                        .catch(error => {
                            reject(new Error(error.response.data.message))
                        });
                })
                .catch(error => {
                    reject(new Error(error.response.data.message))
                });
        });
    }

    loadCurrency() {

        return new Promise((resolve, reject) => {
            axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id)
                .then(response => {
                    resolve(typeof response.data.socialDataProfile.currency != 'undefined' ? response.data.socialDataProfile.currency : '');
                })
                .catch(error => {
                    reject(new Error(error.response.data.message));
                });
        });
    }

    saveCurrency() {
        return new Promise((resolve, reject) => {
            axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
                currency:    this.state.currency,
            })
                .then(() => {
                    resolve('Save currency successful');
                })
                .catch(error => {
                    reject(new Error(error.response.data.message));
                });
        });
    }


    invoiceList(dateFrom, dateTo) {
        return new Promise((resolve, reject) => {
            let params = {
                shopperId: this.state.shopperId,
                method: 'LIST'
            };

            if (dateFrom != '') {
                params.dateFrom = dateFrom;
            }

            if (dateTo != '') {
                params.dateTo = dateTo;
            }

            axios.get(this.state.baseUrl + 'gift-card/rest/transaction/0', {
                params: params
            })
                .then(response => {

                    if (typeof response.data.message == 'undefined') {
                        resolve(response.data);
                    }

                })
                .catch(error => {
                    reject(error.response.data.message);
                });
        });
    }
}