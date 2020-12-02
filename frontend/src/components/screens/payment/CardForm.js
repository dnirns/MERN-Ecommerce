import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  TextField,
  FormGroup,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    minWidth: 250,
    justifyContent: 'center',
  },
  text: {
    padding: 0,
  },
}))

const CardForm = ({ cardNumber, cvv }) => {
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'))
  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)

  const handleDropdown = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseDropdown = () => {
    setAnchorEl(null)
  }

  const handleCardSelect = (cardChoice) => {
    cardChoice === 'visa'
      ? setCard('Visa')
      : cardChoice === 'mastercard'
      ? setCard('MasterCard')
      : setCard('')
    console.log(card)
    handleCloseDropdown()
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Card p={2}>
          <CardContent>
            <Box textAlign='center'>
              <Typography variant='h4'>Card Details</Typography>
            </Box>
            <form className={classes.root} noValidate autoComplete='off'>
              <FormGroup>
                <Box textAlign='left'>
                  <Button
                    variant='text'
                    className={classes.text}
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={handleDropdown}
                  >
                    Select Card Type
                  </Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseDropdown}
                  >
                    <MenuItem onClick={() => handleCardSelect('visa')}>
                      Visa
                    </MenuItem>
                    <MenuItem onClick={() => handleCardSelect('mastercard')}>
                      Mastercard
                    </MenuItem>
                  </Menu>
                </Box>
                <TextField
                  id='standard-helperText'
                  label='Card Type'
                  required='true'
                  value={card}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id='standard-helperText'
                  label='Name'
                  required='true'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  disabled
                  id='standard-helperText'
                  label='Card Number'
                  required='true'
                  value={cardNumber}
                />
                <TextField
                  disabled
                  id='standard-helperText'
                  label='CVV'
                  required='true'
                  value={cvv}
                />
                <TextField
                  id='standard-helperText'
                  label='Expiry'
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required='true'
                />
              </FormGroup>
            </form>
            <Box display='flex' justifyContent='center'>
              {!name || !card ? (
                <Button variant='contained' color='primary' disabled={true}>
                  <Box mr={1}>
                    <LockIcon fontSize='small' />
                  </Box>
                  Submit Payment
                </Button>
              ) : (
                <Button variant='contained' color='primary' disabled={false}>
                  <Box mr={1}>
                    <LockIcon fontSize='small' />
                  </Box>
                  Submit Payment
                </Button>
              )}
            </Box>
            <Box mx={3} mt={3}>
              <Typography variant='body2'>* required.</Typography>
            </Box>
            <Box mx={3} mt={3}>
              <Typography variant='body2'>
                ** this is a mock e-commerce site, example card no. has been
                generated.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default CardForm
