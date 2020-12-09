import React from 'react'

import { Typography, Box, Container, Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

const About = () => {
  return (
    <Container maxWidth='lg'>
      <Box p={6} mt={3} textAlign='center'>
        <Typography variant='h2'>About</Typography>

        <Box p={3}>
          <Typography variant='body1'>
            This is a <strong>fake</strong>, but{' '}
            <strong>fully functional</strong> e-commerce site, made by{' '}
            <strong>
              <Link href='https://www.dnirns.com'>me</Link>
            </strong>
            .
          </Typography>

          <Box p={3}>
            <Typography variant='body1'>
              Though you can't <em>actually</em> buy the products, all aspects
              of a real shop are working away under the hood. A fake credit-card
              number will be generated on the payment screen, so don't worry -
              I'm not trying to steal your money.
            </Typography>
          </Box>

          <Box pb={4}>
            <Typography variant='body1'>If you're interested, here's the code on GitHub:</Typography>
          </Box>
          <Link href='https://github.com/dnirns/MERN-Ecommerce'>
            <GitHubIcon fontSize='large' />
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default About
