import React, { useState } from 'react';
import { Chip, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ConfirmationDialoge from 'src/shared/ConfirmationDialoge';
import axios from 'axios';
import { errorToast, successToast } from 'src/shared/Toast';
import { useNavigate } from 'react-router';

const ExcerciseActionRenderers = ({ data, api }) => {
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    setOpenConfirmationDialog(false);
    try {
      const response = await axios.delete(`/exercises/${data._id}`);
      if (response.status === 200) {
        successToast('Deleted Successfully!');
        api.applyTransaction({ remove: [data] });
      }
    } catch (e) {
      errorToast(e.message);
    }
    setLoading(false);
  };
  const handleEdit = () => {
    navigate(`/exercises/${data._id}`);
  };

  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={handleEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={() => setOpenConfirmationDialog(true)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {openConfirmationDialog && (
        <ConfirmationDialoge
          // open={true}
          loading={loading}
          // selectedUser={data}
          dialogText={'Are you sure you want to delete it?'}
          handleClose={() => setOpenConfirmationDialog(false)}
          // setOpenConfirmationDialog={setOpenConfirmationDialog}
          handleConfirmation={handleDelete}
        />
      )}
    </>
  );
};

export default ExcerciseActionRenderers;

export const ChipRenderer = ({ value }) => {
  if (value) {
    return <Chip label="Yes" color="success" />;
  }
  return <Chip label="No" color="error" />;
};
