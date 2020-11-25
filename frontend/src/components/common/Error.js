import Alert from '@material-ui/lab/Alert'

const Error = (props) => {
  return <Alert severity='error'>{props.children}</Alert>
}

export default Error
