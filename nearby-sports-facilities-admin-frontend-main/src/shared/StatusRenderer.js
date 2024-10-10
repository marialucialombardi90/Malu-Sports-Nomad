import { Typography } from '@mui/material';
import { memo } from 'react';

const StatusRenderer = ({ value }) => {
  const activeStyles = {
    border: '1px solid #C6F0C2',
    backgroundColor: '#EAFBE7',
    color: '#2F6846',
  };

  const inactiveStyles = {
    border: '2px solid #F0C2C2',
    backgroundColor: '#ECE2E2',
    color: '#DF6666',
  };

  const styles = value ? (value.toLowerCase() === 'active' ? activeStyles : inactiveStyles) : {};

  return value ? (
    <Typography
      variant="caption"
      sx={{
        padding: '4.5px',
        borderRadius: 1,
        fontWeight: '400',
        ...styles,
      }}
    >
      {value.toUpperCase()}
    </Typography>
  ) : null;
};

export default memo(StatusRenderer);
