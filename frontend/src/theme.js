import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: '20px',
        },
      },
    },
  },
  typography: {
    h2: {
      color: 'pink',
    },
  },
})

export default theme
