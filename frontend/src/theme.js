import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {

        },
      },
    },
  },
  typography: {
    h2: {
      // color: 'pink'
    },
  },
})

export default theme
