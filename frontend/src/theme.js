import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    icon: {
      cursor: 'pointer',
    },
    MuiSnackbar: {},
    MuiSnackbarContent: {
      root: {
        backgroundColor: '#6a88e4',
        width: '100vw',
        padding: '10px',
        borderRadius: 'none',
        justifyContent: 'center',
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
    fontFamily: [
      'Fira Sans',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ].join(','),
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
