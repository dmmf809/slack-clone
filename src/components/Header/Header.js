import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from './style.js';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.js';

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      {/**Header left */}
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user.displayName}
          onClick={() => auth.signOut()}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/**Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search' />
      </HeaderSearch>
      {/**Header right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
