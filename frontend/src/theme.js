import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    icon: {
      cursor: 'pointer',
    },
    MuiSnackbar: {},
    MuiSnackbarContent: {
      root: {
        backgroundColor: '#66bb6a',
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
    fontFamily: ['Fira Sans', 'Helvetica Neue', 'Arial', 'sans-serif'].join(
      ','
    ),
  },
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffddc1',
      main: '#ffab91',
      dark: '#c97b63',
      contrastText: '#f5f5f5',
    },
  },
})

export default theme
