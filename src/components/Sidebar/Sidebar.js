import { SidebarContainer, SidebarHeader, SidebarInfo } from './style';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

const Sidebar = () => {
  //Firebase hooks
  const [channels, loading, error] = useCollection(db.collection('rooms'));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Hi</h2>
          <h3>
            <FiberManualRecordIcon /> John Doe
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOptions Icon={InsertCommentIcon} title='Threads' />
      <SidebarOptions Icon={InboxIcon} title='Mentions &amp; Reactions' />
      <SidebarOptions Icon={DraftsIcon} title='Saved Items' />
      <SidebarOptions Icon={BookmarkBorderIcon} title='Channel Browser' />
      <SidebarOptions Icon={PeopleAltIcon} title='People &amp; User Groups' />
      <SidebarOptions Icon={AppsIcon} title='Apps' />
      <SidebarOptions Icon={FileCopyIcon} title='File Browser' />
      <SidebarOptions Icon={ExpandLessIcon} title='Show less' />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title='Channels' />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title='Add Channel' />
      {/*Map through the added channels*/}
      {channels?.docs.map((doc) => {
        return (
          <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
