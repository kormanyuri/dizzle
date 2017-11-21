import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/StoreCreditList';


class StoreCreditList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: typeof props.open !== 'undefined' ? props.open : false,
            id: typeof props.id !== 'undefined' ? props.id : 0,
            member: typeof props.member !== 'undefined' ? props.member : '',
            balance: typeof props.balance !== 'undefined' ? props.balance : '',
        };
        const data = [
            this.createData('Jack k.', '$85'),
            this.createData('Micky D.', '$45'),
            this.createData('Jack k.', '$85'),
            this.createData('Micky D.', '$45'),
            this.createData('Jack k.', '$85'),
            this.createData('Micky D.', '$45'),
            this.createData('Jack k.', '$85'),
            this.createData('Micky D.', '$45'),
        ];
        this.state.data=data;
        this.createData=this.createData.bind(this);
    };

    createData(member, balance) {
        this.state.id += 1;
        const id = this.state.id;
        return {  id, member, balance };
    };

    handleClick = (event, member, balance) => {

        if( member!=='' && balance!==''){
            this.setState({
                open: true,
                member: member,
                balance: balance,
            });
        }

    };

    render(){
        return(
            <div>
                <MyAppBar
                    title="store credit list"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.wrapFilter} style={{position: 'relative'}}>

                        <Table className={this.props.classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>member</TableCell>
                                    <TableCell>Store credit balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell>{n.member}</TableCell>
                                            <TableCell>{n.balance}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </MyPaper>
            </div>
        );
    }
}

StoreCreditList.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(StoreCreditList));