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
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#aab6fe',
      main: '#7986cb',
      dark: '#49599a',
      contrastText: '#f5f5f5',
    },
  },
})

export default theme
