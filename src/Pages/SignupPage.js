import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
import Card from '@material-ui/core/Card'

const styles = theme => ({
  root: {
    textAlign: 'center'
  }
})

class SignUp extends Component {
  state = {
    name: '',
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

  signUp = () => {
    const { email, name, password } = this.state

    //fake auth for now
    if (email !== '' && name !== '' && password.length >= 6) {
      this.setState({ redirectToReferrer: true })
    } else {
      this.setState({ alertOpen: true })
    }
  }

  render() {
    const { classes } = this.props

    let { redirectToReferrer, alertOpen } = this.state
    if (redirectToReferrer) return <Redirect to={'/Home'} />
    document.body.style.backgroundColor = '#03152A'

    return (
      <div className={classes.root} style={{ background: '#03152A' }}>
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
            <h2>Sign Up</h2>
            <form
              onSubmit={event => {
                event.preventDefault()
                event.target.reset()
                this.signUp()
              }}
            >
              <Grid item xs={12}>
                <TextField
                  id="name"
                  label="name"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="password"
                  helperText="must be longer than 6 characters"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
              </Grid>

              {/* When signup clicked call signup function, either display dialog or add new user  */}
              <Button
                onClick={this.signUp}
                variant="contained"
                color="primary"
                style={{
                  borderRadius: '30px',
                  backgroundColor: '#EF6167',
                  width: '60%',
                  marginBottom: '15px'
                }}
              >
                Sign Up
              </Button>
            </form>

            {/* Alert Box open when the user has incorrectly entered their name, email, or password */}
            <Dialog
              open={alertOpen}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You have entered an Invalid Email, name, and/or Password.
                  Please try again.
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

export default withStyles(styles)(SignUp)
