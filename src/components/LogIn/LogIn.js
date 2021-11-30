import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import { InnerContainer, LoginContainer } from './style';

const LogIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <InnerContainer>
        <img
          src={process.env.PUBLIC_URL + '/assets/slack-logo.png'}
          alt='Slack Logo'
        />
        <h1>Sign in to your workspace</h1>
        <p>This is just a clone</p>

        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </InnerContainer>
    </LoginContainer>
  );
};

export default LogIn;
