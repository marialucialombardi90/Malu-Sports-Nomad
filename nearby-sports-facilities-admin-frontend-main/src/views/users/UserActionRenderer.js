import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
// import { useNavigate } from 'react-router';

const UserActionRenderer = ({ data }) => {
  // const navigate = useNavigate();
  // const handleDelete = () => {
  //   console.log('Deleting...');
  // };

  const handleView = () => {
    console.log('=========   View Open   ============');
    console.log(data);
    console.log('====================================');
  };

  return (
    <>
      <Tooltip title="View Details">
        <IconButton color="default" onClick={handleView}>
          <RemoveRedEye fontSize="small" />
        </IconButton>
      </Tooltip>
      {/* <Tooltip title="Delete">
        <IconButton color="default" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip> */}
    </>
  );
};

export default UserActionRenderer;
