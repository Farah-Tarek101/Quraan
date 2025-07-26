import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      formData: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        gender: '',
        country: '',
        phoneNumber: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  togglePasswordVisibility() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  }

  render() {
    const { formData, showPassword } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.contentWrapper}>
          <section className={styles.signInSection}>
            <form className={styles.form}>
              <h3>Sign up</h3>
              <div className={styles.inputbox}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={this.handleChange} required />
              </div>
              {/* Other input fields */}
              <button type="submit">Sign up</button>
              <p className={styles.loginMessage}>
                Have an account? <Link to="/login">Log In</Link>
              </p>
            </form>
          </section>
        </div>
        <Footer className={styles.footer} />
      </div>
    );
  }
}

export default Signup;
