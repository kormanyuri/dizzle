/* eslint-disable flowtype/require-valid-file-annotation */

import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createMuiTheme } from 'material-ui/styles';
import { purple, green } from 'material-ui/colors';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

const pdg = 15;

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  spacing: {
    unit: 5
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
  overrides: {
    MuiAvatar: {
      root: {
        border: '2px solid #fff',
      }
    },
    MuiButton: {
      root: {
        fontSize: 12,
        fontWeight: 'bold',
        padding: 17,
      },
      flatPrimary: {
        color: '#fff',
        backgroundColor: '#a99771',
        borderRadius: 4,
        '&:hover':{
          backgroundColor: 'rgba(169,151,113,0.5) !important',
        },
      }
    },
    MuiInput: {
      root: {
        fontSize: 13,
        color: '#b1a692',
        fontWeight: 500,
        marginTop: '0px !important',
      },
      formControl: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: '0 ' + pdg + 'px 0',
      },
      inputSingleline: {
        height: '13px',
        padding: '15px 0',
        '&::-webkit-input-placeholder':{
          color: '#b1a692',
          opacity: 1,
        }
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 13,
        fontWeight: 500,
        color: '#fff',
        display: 'inline-block',
        width: 'auto',
      },
      formControl: {
        top: '50%',
        bottom: '50%',
        marginTop: -6.5,
        transform: 'none'
      },
      animated: {
        transform: 'none'
      },
    },
    MuiSelect: {
      select: {
        height: 43,
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          background: 'none'
        },
        paddingBottom: 0,
      },
      icon: {
        top: 10,
        right: -8
      },
      selectMenu: {

      }
    },
    MuiTableHead: {
      root: {

        fontSize: 11,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
      }
    },
    MuiTableBody: {
      root: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.5)',

      }
    },
    MuiTableRow: {
      root: {
        '&:nth-child(2n)': {
          backgroundColor: 'rgba(169,151,113,0.2)',
        }
      },
      head: {
        backgroundColor: '#695c3e',
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
      }
    }
  }
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export const sheetsManager = new Map();

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
