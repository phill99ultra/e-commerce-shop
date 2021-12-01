import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { SignInContainer, SignInTitle, ButtonsContainer  } from './sign-in.style';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = () => {
    const dispatch = useDispatch();
    const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
    const emailSignInStartClickHandler = (email, password) => dispatch(emailSignInStart({ email, password }));

    const [userCredentials, setCredentials] = useState({
        email: '', 
        password: ''
    });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();       
        emailSignInStartClickHandler(email, password);        
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name] : value });
    }
   
    return(
        <SignInContainer>
            <SignInTitle >I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type="email" 
                    label='Email'
                    handleChange={handleChange}
                    value={email} 
                    required/>                    
                <FormInput 
                    name='password' 
                    type="password" 
                    label='Password'
                    handleChange={handleChange}
                    value={password} 
                    required/>
                <ButtonsContainer>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type='button'
                        onClick={googleSignInStartClickHandler} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>                    
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )    
}

export default SignIn;