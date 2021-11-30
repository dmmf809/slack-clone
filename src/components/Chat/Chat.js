import {
  ChatBottom,
  ChatContainer,
  ChatHeader,
  ChatMessages,
  HeaderLeft,
  HeaderRight,
} from './style';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Message from './Message';
import { useEffect, useRef } from 'react';
import { AppLoading, AppLoadingContents } from '../../style';

const Chat = () => {
  const chatRef = useRef(null);
  //Able to pull the id info from the db
  const roomId = useSelector(selectRoomId);
  //Pull the channelName using firebase useCollection hook
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timeStamp', 'asc')
  );

  //When the messages is still loading and the roomId changes, fire this useEffect
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

    if (loading) {
      return (
        <AppLoading>
          <AppLoadingContents>
            <img
              src={process.env.PUBLIC_URL + 'assets/slack-loading.gif'}
              alt='Loading'
            />
          </AppLoadingContents>
        </AppLoading>
      );
    }
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </ChatHeader>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timeStamp, user, userImg } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timeStamp={timeStamp}
                  user={user}
                  userImg={userImg}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            channelName={roomDetails?.data().name}
            channelId={roomId}
            //enables the recent message to be seen (scrolls to the bottom)
            chatRef={chatRef}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
