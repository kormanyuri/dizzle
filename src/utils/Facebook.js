/**
 * Created by korman on 28.12.17.
 */

import axios from 'axios';
import Config from '../Config';

export default class Facebook
{

    constructor(){
        const config = new Config();
        this.state = {
            baseUrl: config.baseUrl
        };

        this.statusFBChangeCallback = this.statusFBChangeCallback.bind(this);
        this.checkFBLoginState = this.checkFBLoginState.bind(this);
        this.loginFB = this.loginFB.bind(this);
        this.loadFbLoginApi = this.loadFbLoginApi.bind(this);
    }

    loadFbLoginApi(){
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1246488792150506',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.11'
            });

            FB.AppEvents.logPageView();

        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    loginFB() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', {fields: 'name, email'}, response => {
            console.log(response);
            axios.post(this.state.baseUrl + 'gift-card/rest/social-auth/fb', {
                name: response.name,
                id: response.id,
                email: response.email
            })
                .then(response => {
                    console.log(response);
                    window.localStorage.setItem('token', response.data.token);
                    window.localStorage.setItem('consumer', JSON.stringify({
                        id: response.data.id,
                        name: typeof response.data.user.name != 'undefined' ? response.data.user.name : '',
                        image: typeof response.data.user.image != 'undefined' && response.data.user.image != '' ? response.data.user.image : UploadAva
                    }));
                    // const orderShopperId = window.localStorage.getItem('order_shopper_id');
                    // const orderProcess = window.localStorage.getItem('order_process');
                    window.location = '/';
                })
                .catch(error => {
                    console.log(error);
                });
            // console.log('Successful login for: ' + response.name);
            // document.getElementById('status').innerHTML =
            //     'Thanks for logging in, ' + response.name + '!';
        });
    }

    statusFBChangeCallback(response) {
        //console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            this.loginFB();
        } else if (response.status === 'not_authorized') {
            console.log("Please log into this app.");
        } else {
            console.log("Please log into this facebook.");
        }
    }

    checkFBLoginState() {
        // FB.getLoginStatus(this.statusFBChangeCallback);
        const self = this;
        console.log(self);
        FB.getLoginStatus(response => {
            //console.log(response);
            //console.log(this);
            self.statusFBChangeCallback(response);
        });
    }
}