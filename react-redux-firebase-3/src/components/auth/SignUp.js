import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
      this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
      this.props.signUp(this.state)
    }

    render() {
      const { auth, authError } = this.props;
      // Check Login
      if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">

                <div className="card">
                    <form onSubmit={this.handleSubmit} className="white">
                        <div className="card-content">
                            <div className="card-title">
                                <h5 className="grey-text text-darken-3">SIGN UP</h5>
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="card-action">
                          <button className="btn green lighten-1 z-depth-0"><i class="fas fa-user-plus"></i> Sign Up</button>
                          &nbsp; &nbsp;
                          <Link to="/signin" className="btn transparent z-depth-0 black-text"><i class="fas fa-key"></i> Sign IN</Link>
                          <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                          </div>
                        </div>
                    </form>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
