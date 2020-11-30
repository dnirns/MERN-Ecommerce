import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    icon: {
      cursor: 'pointer',
    },
    MuiSnackbar: {
      root: {
        width: '100vw',
        marginTop: '24px',
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: '#6a88e4',
        width: '100%',
        padding: '10px',
        borderRadius: 'none',
        justifyContent: 'center',
      },
      action: {
        marginLeft: '0px',
      },
    },

    MuiCssBaseline: {
      '@global': {
        html: {},
        a: {},
      },
    },
  },
  typography: {
    h2: {},
  },
  palette: {
    primary: {
      main: '#424242',
      dark: '#1b1b1b',
      light: '#6d6d6d',
    },
    secondary: {
      main: '#6d6d6d',
      dark: '#bcbcbc',
      light: '#ffffff',
    },
  },
})

export default theme
