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

const Header = () => {
  return (
    <HeaderContainer>
      {/**Header left */}
      <HeaderLeft>
        <HeaderAvatar />
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
