import { Link } from 'react-router-dom';
import LogoMedia from '../../../../assets/images/logos/logo1.png';
import { Box, styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <Box component="img" src={LogoMedia} alt="logo" sx={{ height: '5.7vh' }} />
    </LinkStyled>
  );
};

export default Logo;
