import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Grid,
  MenuItem,
  Box,
  Typography,
  Button,
  Select,
  FormControl,
  Checkbox,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { errorToast, successToast } from 'src/shared/Toast';
import FileReader from 'react-file-reader';
import { useNavigate } from 'react-router';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  trainer_allowed: Yup.boolean().required('Trainer Allowed is required'),
  description: Yup.string().required('Description is required'),
  open_time: Yup.string().required('Open Time is required'),
  close_time: Yup.string().required('Close Time is required'),
  no_of_days: Yup.array().min(1, 'At least one day must be selected'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  booking: Yup.boolean().required('Type is required'),
  price: Yup.number().when('booking', {
    is: true,
    then: () => Yup.number().required('Price is required for Private booking'),
    otherwise: () => Yup.mixed().optional(),
  }),
  period: Yup.string().when('booking', {
    is: true,
    then: () => Yup.string().required('Period is required for Private booking'),
    otherwise: () => Yup.mixed().optional(),
  }),
});

const AddFacilityForm = ({ id }) => {
  const categoryOptions = ['Pilates', 'Yoga', 'Surf', 'Roller', 'Running', 'Gym', 'Cross Fit'];
  const periodOptions = ['Day', 'Week', 'Month'];

  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);

  const handleFiles = (files) => {
    setImageFile(files?.fileList[0]);
  };

  const createForm = useCallback(
    async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const newObj = {
          ...values,
          no_of_days: JSON.stringify(values.no_of_days),
        };
        const formData = new FormData();
        Object.keys(newObj).forEach((data) => {
          formData.append(data, newObj[data]);
        });
        formData.append('image', imageFile);
        const { data } = await axios.post('/facilities', formData, {
          rawRequest: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (data) {
          successToast('Created Successfully!');
          navigate(-1);
        }
      } catch (e) {
        errorToast(e.message);
      } finally {
        setSubmitting(false);
      }
    },
    [imageFile, navigate],
  );

  const editForm = useCallback(
    async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const newObj = {
          ...values,
          no_of_days: JSON.stringify(values.no_of_days),
        };
        delete newObj.image;
        const formData = new FormData();
        Object.keys(newObj).forEach((data) => {
          formData.append(data, newObj[data]);
        });
        if (imageFile) {
          formData.append('image', imageFile);
        }
        const { data } = await axios.put(`/facilities/${id}`, formData, {
          rawRequest: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (data) {
          successToast('Updated Successfully!');
          navigate(-1);
        }
      } catch (e) {
        errorToast(e.message);
      } finally {
        setSubmitting(false);
      }
    },
    [id, imageFile, navigate],
  );

  const {
    values,
    handleSubmit,
    setValues,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleReset,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      category: '',
      trainer_allowed: false,
      description: '',
      open_time: '',
      close_time: '',
      no_of_days: [],
      country: '',
      state: '',
      city: '',
      address: '',
      booking: false,
      price: '',
      period: '',
      image: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (id) {
        editForm(values, { setSubmitting });
      } else {
        createForm(values, { setSubmitting });
      }
    },
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { data } = await axios.get(`/facilities/${id}`);
          if (data) {
            setValues({
              name: data.name,
              category: data.category,
              trainer_allowed: data.trainer_allowed,
              description: data.description,
              open_time: data.open_time,
              close_time: data.close_time,
              no_of_days: JSON.parse(data.no_of_days),
              country: data.country,
              state: data.state,
              city: data.city,
              address: data.address,
              booking: data.booking,
              price: data.price ?? 0,
              period: data.period,
              image: data.image,
            });
          }
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [id, setValues]);

  console.log(errors);

  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
        marginTop: 4,
        padding: { xs: 3, sm: 6 },
        borderRadius: 6,
        position: 'relative',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {/* About Section */}
          <Grid item xs={12} sm={6}>
            <Typography>Name:</Typography>
            <TextField
              fullWidth
              id="name"
              name="name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Category:</Typography>
            <TextField
              select
              fullWidth
              id="category"
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.category && Boolean(errors.category)}
              helperText={touched.category && errors.category}
            >
              {categoryOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Trainer Allowed:</Typography>
            <TextField
              select
              fullWidth
              id="trainer_allowed"
              name="trainer_allowed"
              value={values.trainer_allowed}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.trainer_allowed && Boolean(errors.trainer_allowed)}
              helperText={touched.trainer_allowed && errors.trainer_allowed}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography>Description:</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              name="description"
              variant="outlined"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
          </Grid>

          {/* Time Frame Section */}
          <Grid item xs={12} sm={6}>
            <Typography>Open Time:</Typography>
            <TextField
              fullWidth
              type="time"
              id="open_time"
              name="open_time"
              value={values.open_time}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.open_time && Boolean(errors.open_time)}
              helperText={touched.open_time && errors.open_time}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Close Time:</Typography>
            <TextField
              fullWidth
              type="time"
              id="close_time"
              name="close_time"
              value={values.close_time}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.close_time && Boolean(errors.close_time)}
              helperText={touched.close_time && errors.close_time}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>No of Days:</Typography>
            <FormControl fullWidth>
              <Select
                id="no_of_days"
                name="no_of_days"
                multiple
                value={values.no_of_days}
                onChange={handleChange}
                onBlur={handleBlur}
                renderValue={(selected) => selected.join(', ')}
                error={touched.no_of_days && Boolean(errors.no_of_days)}
              >
                {daysOfWeek.map((day) => (
                  <MenuItem key={day} value={day}>
                    <Checkbox checked={values.no_of_days.indexOf(day) > -1} />
                    <ListItemText primary={day} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Location Section */}
          <Grid item xs={12} sm={6}>
            <Typography>Country:</Typography>
            <TextField
              fullWidth
              id="country"
              name="country"
              variant="outlined"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.country && Boolean(errors.country)}
              helperText={touched.country && errors.country}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>State:</Typography>
            <TextField
              fullWidth
              id="state"
              name="state"
              variant="outlined"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.state && Boolean(errors.state)}
              helperText={touched.state && errors.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>City:</Typography>
            <TextField
              fullWidth
              id="city"
              name="city"
              variant="outlined"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Address:</Typography>
            <TextField
              fullWidth
              id="address"
              name="address"
              variant="outlined"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography>Booking:</Typography>
            <TextField
              select
              fullWidth
              id="booking"
              name="booking"
              value={values.booking}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.booking && Boolean(errors.booking)}
              helperText={touched.booking && errors.booking}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Image:</Typography>
            <FileReader base64={true} multipleFiles={false} handleFiles={handleFiles}>
              <Button variant="outlined" component="span">
                Upload Image
              </Button>
            </FileReader>
            {!imageFile && !values.image && (
              <Typography color="error" variant="caption">
                Image Required
              </Typography>
            )}
            {(imageFile || values.image) && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Selected file:{' '}
                {JSON.stringify(imageFile?.name) ??
                  values.image?.split('/')[values.image?.split('/').length - 1]}
              </Typography>
            )}
          </Grid>

          {/* Booking Section */}
          {values.booking && (
            <>
              <Grid item xs={12} sm={6}>
                <Typography>Price:</Typography>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  type="number"
                  variant="outlined"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>Period:</Typography>
                <TextField
                  select
                  fullWidth
                  id="period"
                  name="period"
                  variant="outlined"
                  value={values.period}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.period && Boolean(errors.period)}
                  helperText={touched.period && errors.period}
                >
                  {periodOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{ mr: 2, bgcolor: 'white', color: 'black', border: 'white' }}
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<CheckIcon />}
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {id ? 'Update' : 'Add'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddFacilityForm;
