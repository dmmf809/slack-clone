import { useDispatch } from 'react-redux';
import { enterRoom } from '../../features/appSlice';
import { db } from '../../firebase';
import { SidebarOptionsContainer, SidebarOptionChannel } from './style';

const SidebarOptions = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: '10px' }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionsContainer>
  );
};

export default SidebarOptions;
