// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    isUserError: false,
    isPassError: false,
    isSubmitForm: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  validateFirstName = () => {
    const {username} = this.state
    return username !== ''
  }

  validateSecondName = () => {
    const {password} = this.state
    return password !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({isUserError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateSecondName()

    this.setState({isPassError: !isValidLastName})
  }

  submitForm = event => {
    event.preventDefault()
    console.log('SUBMITED')
    const validateFirstName = this.validateFirstName()
    const validateSecondName = this.validateSecondName()
    if (validateFirstName && validateSecondName) {
      this.setState({isSubmitForm: true})
    } else {
      this.setState({
        isUserError: !validateFirstName,
        isPassError: !validateSecondName,
        isSubmitForm: false,
      })
    }
  }

  submitNewForm = () => {
    this.setState({
      isSubmitForm: false,
      isUserError: false,
      isPassError: false,
      username: '',
      password: '',
    })
  }

  renderUsernameField = () => {
    const {username, isUserError} = this.state
    const showError = isUserError ? 'error-input' : ''
    return (
      <>
        <label className="input-label" htmlFor="username">
          FIRST NAME
        </label>

        <input
          type="text"
          id="username"
          className={`input-filed ${showError}`}
          placeholder="First name"
          value={username}
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, isPassError} = this.state
    const showError = isPassError ? 'error-input' : ''
    return (
      <>
        <label className="input-label" htmlFor="password">
          LAST NAME
        </label>
        <input
          type="text"
          id="password"
          className={`input-filed ${showError}`}
          placeholder="Last name"
          value={password}
          onBlur={this.onBlurLastName}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderSuccessForm = () => (
    <div className="form-cont success-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <p className="success">Submitted Successfully</p>
      <button
        type="submit"
        className="login-button"
        onClick={this.submitNewForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderForm = () => {
    const {isUserError, isPassError} = this.state
    return (
      <form className="form-cont" onSubmit={this.submitForm}>
        <div className="input-container">{this.renderUsernameField()}</div>
        {isUserError && <p className="error-msg">Required</p>}
        <div className="input-container">{this.renderPasswordField()}</div>
        {isPassError && <p className="error-msg">Required</p>}
        <button type="submit" className="login-button btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isUserError, isPassError, isSubmitForm} = this.state
    console.log(isUserError)
    console.log(isPassError)
    return (
      <div className="Reg-form-cont">
        <h1 className="main-heading">Registration Form</h1>
        {isSubmitForm ? this.renderSuccessForm() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
