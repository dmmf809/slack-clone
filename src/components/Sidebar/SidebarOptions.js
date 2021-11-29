import { db } from '../../firebase';
import SidebarOptionChannel from './SidebarOptionChannel';
import { SidebarOptionsContainer } from './style';

const SidebarOptions = ({ Icon, title, addChannelOption }) => {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};
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
