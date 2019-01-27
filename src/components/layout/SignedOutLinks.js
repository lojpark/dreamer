import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
const SignedOutLinks = () => {
  return (
    <div>
        <Button color="inherit" component={Link} to="/signin">Sign In</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
    </div>
  )
}

export default SignedOutLinks
