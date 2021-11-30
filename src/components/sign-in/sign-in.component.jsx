import React from 'react';
import { connect } from 'react-redux';
import { SignInContainer, SignInTitle, ButtonsContainer  } from './sign-in.style';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);        
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value })
    }
    render() {
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle >I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type="email" 
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required/>                    
                    <FormInput 
                        name='password' 
                        type="password" 
                        label='Password'
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required/>
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type='button'
                            onClick={googleSignInStart} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>                    
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);