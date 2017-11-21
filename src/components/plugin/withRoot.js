/* eslint-disable flowtype/require-valid-file-annotation */

import React, {Component} from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import {withStyles, MuiThemeProvider} from 'material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import createContext from '../../styles/createContext';

import styles from '../../theme/plugin/components/withRoot';


let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

const context = createContext();

function withRoot(BaseComponent) {
    class WithRoot extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }

        render() {
            return (
                <JssProvider SheetsRegistry={context.sheetsRegistry} Jss={context.jss}>
                    <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
                        <AppWrapper>
                            <BaseComponent match={this.props.match}/>
                        </AppWrapper>
                    </MuiThemeProvider>
                </JssProvider>
            );
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot');
    }

    return WithRoot;
}

export default withRoot;