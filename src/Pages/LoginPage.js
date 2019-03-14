import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Img from '../image/loginPage.jpg'
import Image from 'material-ui-image'
import Card from '@material-ui/core/Card'

const styles = theme => ({
  root: {
    // flexGrow: 1,
    textAlign: 'center'
    // height: "100%"
  },
  multilineColor: {
    color: 'black',
    borderColor: 'rgb(249,188,136)',
    borderColor: 'black'
  }
})

class Login extends Component {
  state = {
    email: '',
    password: '',
    DirectToHome: false,
    alertOpen: false
  }

  handleClose = () => {
    this.setState({ alertOpen: false })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  login = () => {
    const { email, password } = this.state

    //send to redux later right now just accept everyone with a username
    if ((email !== '') & (password !== '')) {
      this.setState({ redirectToReferrer: true })
    } else {
      this.setState({ alertOpen: true })
    }
  }

  render() {
    const { classes } = this.props

    let { redirectToReferrer, alertOpen } = this.state
    if (redirectToReferrer) return <Redirect to={'/Home'} />
    document.body.style.overflow = 'hidden'

    return (
      <div className={classes.root}>
        <Image
          src={Img}
          style={{ height: '100%', width: '100%', position: 'absolute' }}
        />
        <Card
          style={{
            width: '20rem',
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            opacity: '.9',
            background: '#E5D7E2'
          }}
        >
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <h2>Sign in</h2>
            <form
              onSubmit={event => {
                event.preventDefault()
                event.target.reset()
                this.login()
              }}
            >
              <Grid item xs={12}>
                <TextField
                  id="standard-username"
                  label="email"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  InputProps={{
                    classes: {
                      input: classes.multilineColor
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-name"
                  label="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
              </Grid>
              <Button
                onClick={this.login}
                variant="contained"
                color="primary"
                style={{
                  borderRadius: '30px',
                  backgroundColor: '#EF6167',
                  width: '60%'
                }}
              >
                Login
              </Button>
            </form>

            <p>
              New User?
              <Link to="/signup" style={{ color: '#EF6167' }}>
                Sign Up
              </Link>
            </p>
            {/* Alert Box open when the user has incorrectly entered their email or password */}
            <Dialog
              open={alertOpen}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You have entered an Invalid Email and/or Password. Please try
                  again.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Login)
