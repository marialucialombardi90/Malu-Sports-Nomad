import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Grid, MenuItem, Box, Typography, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { errorToast, successToast } from 'src/shared/Toast';
import axios from 'axios';
import FileReader from 'react-file-reader';
import { useNavigate } from 'react-router';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
  // image: Yup.mixed().required('Image is required'),
});

const AddExercise = ({ id }) => {
  const [imageFile, setImageFile] = useState(null);
  const categoryOptions = ['Lower Body', 'Upper Body', 'Stretching'];

  const navigate = useNavigate();

  const createForm = useCallback(
    async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        // Append the image file separately
        formData.append('image', imageFile);

        const { data } = await axios.post('/exercises', formData, {
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
        };
        delete newObj.image;
        const formData = new FormData();
        Object.keys(newObj).forEach((data) => {
          formData.append(data, newObj[data]);
        });
        if (imageFile) {
          formData.append('image', imageFile);
        }
        const { data } = await axios.put(`/exercises/${id}`, formData, {
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

  const handleFiles = (files) => {
    setImageFile(files?.fileList[0]);
  };

  const {
    values,
    handleSubmit,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleReset,
    isSubmitting,
    setValues,
  } = useFormik({
    initialValues: {
      name: '',
      category: '',
      description: '',
      image: null,
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
        const { data } = await axios.get(`/exercises/${id}`);
        if (data) {
          setValues({
            name: data.name,
            category: data.category,
            description: data.description,
            image: data.image,
          });
        }
      })();
    }
  }, [id, setValues]);

  return (
    <>
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
    </>
  );
};

export default AddExercise;
