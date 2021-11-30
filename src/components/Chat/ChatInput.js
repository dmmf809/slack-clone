import { Button } from '@mui/material';
import { useState } from 'react';
import { auth, db } from '../../firebase';
import { ChatInputContainer } from './style';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      //Gives the same timestamp
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImg: user?.photoURL,
    });
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type='submit' onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
