import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Decline = ({ loading, title, dialogText, buttonText, handleConfirmation, handleClose }) => {
  const [reason, setReason] = useState('');
  return (
    <div>
      <Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <ErrorOutlineOutlinedIcon color="error" sx={{ fontSize: '50px' }} />
          <Typography pt={2} sx={{ fontSize: 16, fontWeight: 'bold' }}>
            {title ?? 'Confirmation Dialog'}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography>{dialogText ?? 'Are you sure you want to approve it?'}</Typography>
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            placeholder="Reason for decline"
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ color: '#000000', mr: 3 }}
            onClick={handleClose}
            disabled={loading}
          >
            No
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ fontWeight: '700 !important' }}
            onClick={() => handleConfirmation(reason)}
            disabled={loading}
            autoFocus
          >
            {buttonText ?? 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Decline;
