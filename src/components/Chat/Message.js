import { MessageContainer, MessageInfo } from './style';

const Message = ({ message, timeStamp, user, userImg }) => {
  return (
    <MessageContainer>
      <img src={userImg} alt={user} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timeStamp?.toDate()).toLocaleString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
