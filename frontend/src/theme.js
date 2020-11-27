import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {},
        a: {
          // color: 'white'
        },
      },
    },
  },
  typography: {
    h2: {
      // color: 'pink'
    },
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
