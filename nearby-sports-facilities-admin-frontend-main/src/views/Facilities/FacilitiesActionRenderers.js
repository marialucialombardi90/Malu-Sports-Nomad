import React, { useState } from 'react';
import { Chip, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router';
import ConfirmationDialoge from 'src/shared/ConfirmationDialoge';
import { errorToast, successToast } from 'src/shared/Toast';
import axios from 'axios';

const FacilitiesActionRenderers = ({ data, api }) => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/facilities/${data._id}`);
      if (response.status === 200) {
        successToast('Deleted Successfully!');
        api.applyTransaction({ remove: [data] });
      }
    } catch (e) {
      errorToast(e.message);
    }
  };

  const handleEdit = () => {
    navigate(`/facilities/${data._id}`);
  };

  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={handleEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton onClick={() => setOpenModal(true)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {openModal ? (
        <ConfirmationDialoge
          dialogText={`Do you want to delete this ${data.name}?`}
          handleClose={() => setOpenModal(false)}
          handleConfirmation={handleDelete}
        />
      ) : null}
    </>
  );
};

export default FacilitiesActionRenderers;

export const ChipRenderer = ({ value }) => {
  if (value) {
    return <Chip label="Yes" color="success" />;
  }
  return <Chip label="No" color="error" />;
};
