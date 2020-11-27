import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div>
      <Typography variant='h2'>This isn't a real shop so you can't pay, soz</Typography>
      <Link to='/'>
        {' '}
        <Button variant='outlined' color='primary'>
          Go Home
        </Button>
      </Link>
    </div>
  )
}

export default Payment
