/* eslint-disable flowtype/require-valid-file-annotation */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import withRoot from "../../components/plugin/withRoot";
import MyAppBar from "../../components/plugin/MyAppBar";
import Dialog, {DialogActions, DialogContent, DialogTitle} from "material-ui/Dialog";
import MobileStepper from "material-ui/MobileStepper";
import Button from "material-ui/Button";
import styles from "../../theme/plugin/pages/Intro";
import axios from 'axios';
import Config from '../../Config';

function getStepImg(step) {
    switch (step) {
        case 0:
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABGCAMAAAC+EOlBAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMACfiJyfGYzWPalWDY/CID+vUR39N+B+wzH4yCKOdoDr26rsK0qVkbF4ZyUzyQQC7ipZt4T0aibkvr+oFGAAADOklEQVRYw+WX2XaqQBBFGwQxGuZRBkFAUXGe+f8fu9WEySXmLm3ech5CVttuijpNVYlqbUONe19afBHRs1wm+0zcroW2Vj+k7bcttMWBpT+RHCaoReObbffelb1ZCegPiyLTI2u+6Q8/V384UBq0s5mRSZ4YFUx0MlLNlJp2Zwlh/MRo5m3YJ9LE79TTPynqrPfI5MyrEzKPPJpUJnMzMEtcsVkXkm0fR0Zn3Yg+iWj8Df9Ie44hkioBxbTQAMNmO8qgPpdhCEMZOD10hb/MGJHKj4ETIQZC2yByTcDLb8RB+paIXKOcxgCth/4jYeuKndF2XKZeOqP1IMOx2BFNvPLge1c01AdaBKeKMjqg7QKg7R1dd5yUIqQpK03KSnkjMppi0w+djow2eYBJ+pu0R+8WEYZw8RQrCJaL9p3tNP+ib+yB25gpPID1rbHwo9qEZN7bLNPFb7R1qNIZbzKr6lsrGeqW0PJggSdlkjc9v6ZdtCI97NJo0DzlOZtesVMdPdOeZnx2UmxKTRgylj561GVf7fxev6DpPL7ZMMgaBVTAd5CjOBymddKVMN+y4fDl6LfShAi7Z/mLDVDNtPDtVJwQ3pxV5lgqLBwS343hqlmtNAv3mxG2aw/h6GUcs2qqCko35ibkAj/hVoJX7t5KW2Ma9shXYc2pTpytlrxhsTRggbbDAQDNO7fHhh2dJuAjXdsAMqxT/zhjcU63KNcdHJVsEfnHfLGV5h/yx3GOJt6zbh56KEYDuIW8alpz0ENsWyC00nA6Skn9p7cfN7eyHelyPTDcUDtNtKvSw7hPP+q0RjKVmC+tOSgvaIiyzXwXHVnlSiKMc7nLrJnMcfgTHXtIfnnr0xnDcVN9UcZwYooB5SsDabt65LvF8FE8oX6vSIkrGC+KG316bLJu8l61dJow+aqQ9awLh38cyzwOTDsppB1wrUOr0jm+zhl5Pz0CLUJd0XCv5yhyWm1GKHZFcyOT23Y3v7mphQhoBLNlh5Mq12FsX2gKVQX8IhauZlruvjcght3VfIBaZxh3HIwGn2s0+ulEc0T18VViyURjyFSBMhpkHahq08KsE1hgFfU6vWpfZNLCEa7+/wB6YzVg+nRCuAAAAABJRU5ErkJggg==';
        case 1:
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABNCAMAAAA/4KKBAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMA/Vn5vSsSDYXe4kiLCL9b8s3GBcO3cuFSSqmQeC/c1bOgl0IVZTw1JiDr5xukXXz0kAaXAAABuElEQVRYw+2Wa4+iMBSGqSjgYF1arnIH8e7Mvv//163EkHVncSZz2g9mxicxpiV50nPeU4LxCWGbcEMfgJcWOnVAudami5ojEOs7n78VQKqxf1sPbK1P578CjqGPCEg16vKrbha91k00Uy427Yu1HA89XrtX0x1OYLtDjYFKLZcNsCwCACJ3k9YDykKl1hBIe1vW9cvkCDS+2tiZgJkPOTPECnlk6DGjYd0JmBN6EOVgG2iAjcrQXfh9s9Mq6CwBgC1udriE51J1CQPQ8NsrZ0KcqboaQGj9Xdu5B+QGFQZUBe+67nze79xNJhgQHLh9xSe83E+iqqr56egxXCmnMggCGUiZEXQf8eViGQPARiHo3LXDIJK1u3Ldd7+VAAijYiK0R59MKbqJiak19oAHenVLom750LrxKHxqFHK3n/1PIYk68yV+ec9lyyTq7kE93bycjxHXGnt3waIly437qN8K/Tqfc1+fjrdCupd/TZfMlsCbvtPZU7BfD62bkHs3rvuexT579zBRPHv3MGP8o3r3c+Zu9Mudh7RiF07NEGfO4l+ymKbDfd606rwtQefcZeUbT558S/4AWWhWBgHrSgUAAAAASUVORK5CYII=';
        case 2:
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABICAMAAABbVPIuAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA+/fLPATwDwhY0MG5S9QU7Z4zK/OMciHg3U9HQzkvJrxiGOTHtIZ7mQzo161/Z2xSHagaol6SduW1v4sAAAVSSURBVFjDtZiJkqIwFEUTBBVEBUFFZRFEwA3czf9/2byEcRoQ6dgzc8oqyzReyc3baMRPYB/Uwa51zozO12LHSPfKTlFjZ4h+wumxI78R1OMGMbpHVXiuKtnlc9VFixTZGwjwrqXFnv2p6qQNX9smE19OD2sC7PoIiQMCqHEq3yY6u8D/TDXDhJiRJ+V22meQ0BzPgre13cntcMcC2HP7RNU24U4WX5+7KUjMFELwoYueSEcNfmzErzrswfWL0tKNnRSOS4t90FW73LJpze4OGGT1ikYKizKv6gZOJnlZhB1Y08pidw/hIHHKimDsq2ULk0xeD2FLTN4oSwi51tyCY7/aKMEeDnyq3R2B++IkhkzhzFqNmAte2X6bKBvEg2GSgccrO9qSmYF4cE0SBryyxoqs3P9yt5bB661mcxc68LbDHQkZr+wDkz1/3CaID2nNHbfIhmo15Twxiwi8wdixCEkRFxEmLe4SdoBmcOEML/JAvHhbQsY8ziZgF23A/Jku9NG3yJi6xc+lBbfhfZuOYMFy81Ezg74afqNrQLVfjT5s6Bh0G7PSAVXtiD5DijH4YDdURHDATNHHPARC2m/HC79d/is/qcbmgrd7WR3Rj5hbtId3atLwTqcnEf2QUUino8tL+O3pWFc5T3Gv1jCp7fZTOtWFbiUHe3SCrP7YktQhuPVVR6cBUaxRbGzEyUsWKKDRLmNigt85daABkRUSlgZWjF6AvBz350X6/uy9LPI12Ez0OyCkiQlJcEO1stXCuwkbZFGfBkS+aymigTVH9bKxMSpi9HdNsmjUomcE/WJIZ3xFRG9kTa1krdYGb52GwS+gAdEyLiq8LT30RrYOvEzGh+xoDGuzapPA5i0FrjsP0VvZlTIoouyEp7rZ0iejmrySDuwSPO6i97LZZVrkJCqkgKbGXn1tEaBvNcgeq961CI7lLDq3NMLY3Y3X+UWZ+ahR9oakIshTCHaphcFUjEO23dX4tRScULOs1VJKgLfY+TMrGdEAg/BM7n47VonRXp+Im4ZIEIsHnzGzz980KuNKGEsnl8VChbIsMDxY9PDG9mjkGpf6kfBmkd+sRCYb9UvU1gRXZwFnWdYuXO6TzKgaMMZ0Qzdfh5tSOlS2mtTDVk3yduUBKWDtj6WvsMdgH2yV5C2Nrdbrg9+pRhYI0lDTtLYpCJjd+fn0ZWtI0/m39xFUDCq7jsZFIl17U2qk4HSaeq7t64M2bTSnQlHD1+DZ8zBRGiKhCWmxx89n3k0MdpqHP7XJ0cjsI9nqw7Tp0MPc08MvGDkXctlrNimSRSsOWdYFU7jVGbXVKc+B9/qaUJH1bnINawioR0iA66kQE7C89XhkXQs/M6aYORi8YmmdSoU7WMLqLW+RNuTAAl75m32rpINNGljp02Jdo+39wVcThuNePWGoxm5xjHiYEBOPhlLjlseOeoKgVNXENU0/+VkYe4leJDlrcBh+gD5jeNjS8jVCT1lZ6pbwaB0UZpGL+JEWId3kfdjYdBjmdbHhFHXPNCYGx2J38DvDIh1XIXid16u1zPOcZdxp09tGQanpDNbqcklfKn0t1z2TCO4pzf/Z2UunqJnR3aKmXcXyxFgLXNOxryYBlMhoELUTi22rXx6DYlyn2mN7747Y7oili29OX1Y1drnceXFbFEUHXk7+xj45z6sk775lp7eUT1K1XxiPmUC3H0JT/phppGCWpfe59/X1wMmWbHm7PqKfMczWZp7/19hfOI4tT+5h7p0yrrOHP9ij59FibSs822Qin9BfMl2Md0KhaOySuSGhf4AUGL7eG8xmg1D33aDxmH4BcVEQLcgAUv0AAAAASUVORK5CYII=';
        case 3:
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABJCAMAAACQCCGLAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMABfsS+Ars4uf0jPHJmkfZwEIZztS0JcWIXDndYzEWbCm9q55wUT0tIQ6vpJRnSzUdl49+enW4gldgJQQO5AAABtxJREFUWMOlWIm2ojAMBUQWEUQEBBFFccd9ffb/P2zSsigtjM6bzJnzgNI0y81NkMvkcE0m/f6mNTzw3D9LMxyeN2Z/klwPpefHk4xSEeTJ5d8084fLRBay7fL2+FpZ9tG7SI4/+lZp42cjlTb3l/mS1YbbTnIZ37ypnb7U232leLRrC8QQe+rNxpekA9dtK/NCB9+32U2jezVVhFef648h9dsIRDWvi+xdawun6On1XkToxL/5ZegKAnGMv2vtOthSRTcab4HeIiQa5GoKPpdd5sOtBju0llWv1PIk/Mo25MthAQem+NFBQcKQ2TVwRBziWoONHiyLmwGz8BSQgmF2I8Yywvt4o/bIPGykkt2tLxoOv89XZBG23SDuEAOv0qDjGcdu4uLwxxNzMjHhX7zHgHSwqV51iDyENk1u1UHCvMbTuQ3AW3G8p6JCVI/fB/DXrt0kInvFLVSkuFyNrDbKguMeuPpEIgJY6eCKnK7q9rgKUhecDzHi64toCdmTkDD1f4g8pwT+2rVZX8yAhSd3gZOZlZvzMIrIgbFmoaVpgtZgn4HMeDg3xqYEoQsHJXZmgI5jKE9nXQvviRFqvdZaENYQTra6t42sQnS69O4zLjQAwpVeCOUsPXYyDi2dVntqhOPEztIoh/Ru4v8doR1bDN5dzjPfDkBtyZagnSNDvntsQewQunMQ4GEVjUTz1iRTTVmbq5y05lFV5obAjlitz1XLOvJbpqQyagVV6rf8qIbhCLZotSz36xoktaRWO6X947dqR4OdbioCHVtBMfXdYPRJ7bOSowe7uKfUx1bpgerKonhitWZVyo6+3pOEtGdKGq1WK5Z6un+sSpnJARnNGHwFKNvX3g6jE4PbaHhqZ6pRh0HYDCiMSyp4cUzaXl/fLSCA/Kb0Rgs28RD2xU7vawhkXMGMCX5NZ4nLjvOcNE4iQk6xhL0TT408o7G9YaiMVCVYdueZfDXyR66DQMRzd9ElchZJ94xy/DWYrPF37MEewtPg6mTfwUkncRaQAP+z286+nkthy55bKkgb1JXZFUdPD3WUS3GrXeuKbKAhJeQakwwKrBzuGWM3fceW4NK2becJt6RB3vMxjgWCCe6f09Syzlyxt719FuydgIKwkYVy38PBuLEGp8BppS1NOrCrhokDmhR5tuCQ+QsrCenKBs+6KCERv2fByScmQLGIE7N727YpIZG/Yr1izKTlBB6SfnUFrp6Xm06M/Vd1t8TOFGT6KTXE3XI7V/NuY9nvJcgfh46G/TcpD5fgnUGVIrZYc4ZW8eYC0GVbxcCA5NvCPR4jYxzLBKX9YZNG26TEDdxKRsLdIUiW47ERHY/u4gabxcLzmYhP7fTsAFxIDWArhDT2dXnmdEZPcA2LGti9Dr4U39D6VNBLOq0uWGoxNG2oSBq8Z0BFapdbd1sd9BKlxLKR1w4kVZLtu5dOwXMlMGgStpEwewc2QDAmF4Z3t2XYHrS9iGYXd2AslqOCL1i+5GMyEb/kBlHNwTJaLoyBS+eDwS2k3WdoX0Ad991FOTX/e3kQnFCyBDU/7w9iUv7fy6hNT2YrH+y8U08NEYld7nvZCzCjlnjnjvoWd6W+B5p9XNBfC6/j2ZOyC/jooCKxdNqYJO1bWQXQN+hY95vEukdp8pZrybp6OFOiUuGagLdU+4Sn3OrXo4pl4qTEM6EG43EacyksJUHE/POdhBIFJG6GSTHj5jHtRvyl2guA9kibv82dTnjqQDn6Suu6TZSUORD95FEPSidGsHT7DrTATOV4+dAe3bTQFMynv6k0fstk9wQckz5pOrQngGh1/w1oO7RbjV7xBBdau2Rc08x+jWCF9lhaljumBvz9uta6NEqC1ecYJHgcYUost3Ddo31xFQy6TxIp9HjenLwT1xmh+5oePNsfK21GQ4gLFZgj3slNWdJJE4xPMejnqXZ/VsXcEVivjtYpvFn9LPOelnxQ282K3H3I2dDDJ+Vv+CQvV8tEysPFDgpIXv5dLQbtmnMvpEl7hXnU0HTMOiRcXlzODZBw+wjacSNVilK2mgPgonJOhX3KtUSCi9ViK40FbWyTAUgPUm89hJwmBQwv9Us5EdW9KVPuLGiJyOcIiAwjfw05vNAE12tyBw13iuic2Qx5rpdlkCr1woxcp80DGYneZaFB/+SdjD2XLTJoMb8jsd95rSi7EwCQQ7CtwXT78UIsamu5ZT772LlFOuVYIf5PJqx/J0CLCaU1KgpGl/7aKhsz71DcEBCAML++/Yjksf8+XJ0fo+/nhSmBplvR7wk8fisLCZEpkT2NzCGsfD/eoFkVHaHT77US9lLCqo4PJPA/smtfKzrKte//fdsfTR44QhMESX4AAAAASUVORK5CYII=';
        default:
            return 'Unknown step';
    }
}


function getStepTitle(step) {
    switch (step) {
        case 0:
            return 'Welcome!';
        case 1:
            return 'Step 1';
        case 2:
            return 'Step 2';
        case 3:
            return 'Step 3';
        default:
            return 'Unknown step';
    }
}

function getStepText(step) {
    switch (step) {
        case 0:
            return 'You are going to buy XXX’s Gift Card. It powered by Drizzle Gift Card Group Buy Platform.';
        case 1:
            return 'Select Gift Card amount and enter the amount you want to buy';
        case 2:
            return 'Share group buy to friends';
        case 3:
            return 'Your friend joins Group Buy and buy the rest amount. The Group Buy Success. You can use the Gift Buy.';
        default:
            return 'Unknown step';
    }
}

class GiftCardsList extends Component {


    constructor(props){
        super(props);

        const config = new Config();

        window.localStorage.setItem('order_shopper_id', props.match.params.shopperId);

        this.state = {
            // id: props.match.params.id,
            token:      window.localStorage.getItem('token'),
            shopperId:  typeof props.match.params.shopperId  != 'undefined' ? props.match.params.shopperId : null,
            groupBuyId: typeof props.match.params.groupBuyId != 'undefined' ? props.match.params.groupBuyId : null,
            shopper:    '',
            baseUrl:    config.baseUrl,
            items:      [],
            amount:     0,
            iterator:   0,
            status:     'Load...',
            open:       false,
            message:    '',
            activeStep: 0
        };

        this.loadShopper = this.loadShopper.bind(this);
        this.handleNext  = this.handleNext.bind(this);
        this.handleBack  = this.handleBack.bind(this);
    }

    componentWillMount(){

        if (this.state.shopperId) {
            this.loadShopper();
        }

    }

    loadShopper(){
        axios.get(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopperId, {

        })
            .then(response => {
                console.log(response);

                if (typeof response.data.message != 'undefined') {

                    this.setState({
                        status: response.data.message
                    });

                } else {

                    // this.setState({
                    //     items: response.data,
                    //     iterator: response.data.giftCardValue/25
                    // });
                    const shopperObject = JSON.stringify({name: response.data.name, logo: response.data.logo, id: response.data.id});
                    window.localStorage.setItem('shopper', shopperObject);
                }
            })
            .catch(error => {

            });
    }

    handleNext() {
        if (this.state.activeStep + 1 === 4) {
            window.location = '/plugin/gift-cards-list/' + this.state.shopperId;
        } else {

            this.setState({
                activeStep: this.state.activeStep + 1,
            });

        }
    };

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    render() {

        return (

            <div className={this.props.classes.root}>

                <MyAppBar title="Gift Cards"/>
                <Dialog className={this.props.classes.dialog} open={true} onRequestClose={this.handleRequestClose}>
                    <DialogTitle className={this.props.classes.dialogTitle}>
                        {getStepTitle(this.state.activeStep)}
                    </DialogTitle>
                    <DialogContent className={this.props.classes.dialogContent}>
                        <div className={this.props.classes.paternBg}>
                            <img src={getStepImg(this.state.activeStep)} alt=""/>
                        </div>
                        <div className={this.props.classes.stepInf}>
                            {getStepText(this.state.activeStep)}
                        </div>
                        <MobileStepper
                            type="dots"
                            steps={4}
                            position="static"
                            activeStep={this.state.activeStep}
                            className={this.props.classes.root}
                            nextButton={
                                <Button className={this.props.classes.button} dense onClick={this.handleNext}
                                        disabled={this.state.activeStep === 4}>
                                    Next
                                    <KeyboardArrowRight />
                                </Button>
                            }
                            backButton={
                                <Button className={this.props.classes.button} dense onClick={this.handleBack}
                                        disabled={this.state.activeStep === 0}>
                                    <KeyboardArrowLeft />
                                    Back
                                </Button>
                            }
                        />
                        <div className={this.props.classes.textAlignCenter}>
                            <a href={`/plugin/gift-cards-list/` + this.state.shopperId}>skip</a>
                        </div>
                    </DialogContent>
                    <DialogActions className={this.props.classes.wrapAction}>
                        {this.state.children}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

GiftCardsList.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(GiftCardsList));
