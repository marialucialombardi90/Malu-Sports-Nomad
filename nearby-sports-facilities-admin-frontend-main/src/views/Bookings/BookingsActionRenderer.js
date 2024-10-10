import { memo, useState } from 'react';
import { Tooltip, IconButton, Chip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Approve from './components/ApproveModal';
import Decline from './components/DeclineModal';
import axios from 'axios';
import { errorToast, successToast } from 'src/shared/Toast';
import moment from 'moment';

const BookingActionRenderer = ({ data, api, node }) => {
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openDeclineDialog, setOpenDeclineDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const approveHandler = async () => {
    setLoading(true);
    setOpenConfirmationDialog(false);
    try {
      const response = await axios.put(`/bookings/${data._id}`, {
        status: 'confirmed',
      });
      if (response.status === 200) {
        successToast('Approved Successfully!');
        const booking = response.data;
        const rowNode = api.getRowNode(node.childIndex);
        rowNode.setData({
          ...booking,
          userName: `${booking.user?.first_name} ${booking.user?.last_name}`,
          booked_at: moment(booking.booked_at).format('llll'),
          booked_for: moment(booking.booked_for).format('llll'),
          amount: `€ ${booking.amount}`,
        });
        api.refreshCells();
      }
    } catch (e) {
      errorToast(e.message);
    }
    setLoading(false);
  };

  const declineHandler = async (reason) => {
    setLoading(true);
    setOpenDeclineDialog(false);
    try {
      const response = await axios.put(`/bookings/${data._id}`, {
        status: 'declined',
        decline_reason: reason,
      });
      if (response.status === 200) {
        successToast('Declined!');
        const booking = response.data;
        const rowNode = api.getRowNode(node.childIndex);
        rowNode.setData({
          ...booking,
          userName: `${booking.user?.first_name} ${booking.user?.last_name}`,
          booked_at: moment(booking.booked_at).format('llll'),
          booked_for: moment(booking.booked_for).format('llll'),
          amount: `€ ${booking.amount}`,
        });
        api.refreshCells();
      }
    } catch (e) {
      errorToast(e.message);
    }
    setLoading(false);
  };
  if (data.status === 'Pending' || data.status === 'pending')
    return (
      <>
        <Tooltip title="Decline">
          <IconButton
            color="default"
            onClick={() => {
              setOpenDeclineDialog(true);
            }}
          >
            <ThumbDownAltIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Approve"
          onClick={() => {
            setOpenConfirmationDialog(true);
          }}
        >
          <IconButton color="default">
            <ThumbUpIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        {openConfirmationDialog && (
          <Approve
            // open={true}
            loading={loading}
            // selectedUser={data}
            handleClose={() => setOpenConfirmationDialog(false)}
            // setOpenConfirmationDialog={setOpenConfirmationDialog}
            handleConfirmation={approveHandler}
          />
        )}
        {openDeclineDialog && (
          <Decline
            // open={true}
            loading={loading}
            // selectedUser={data}
            handleClose={() => setOpenDeclineDialog(false)}
            // setOpenConfirmationDialog={setOpenDeclineDialog}
            handleConfirmation={declineHandler}
          />
        )}
      </>
    );
  return <></>;
};
export default memo(BookingActionRenderer);

export const ChipRenderer = ({ value }) => {
  if (value === 'Confirmed' || value === 'confirmed') {
    return <Chip label="Confirmed" color="success" />;
  } else if (value === 'Pending' || value === 'pending') {
    return <Chip label="Pending" color="secondary" />;
  }
  return <Chip label="Declined" color="error" />;
};
