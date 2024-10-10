import axios from 'src/utils/axios';
import { dispatch } from 'src/reducers/configureStore';
import { setAuthData } from 'src/reducers/slices/AuthSLice';
import { errorToast, successToast } from 'src/shared/Toast';

const adminFormatter = (admins) => {
  return {
    company_name: admins.company_name,
    phone_number: admins.phone_number,
    email: admins.email,
    is_active: admins.is_active === true ? 'active' : 'inactive',
  };
};

const adminsFormatter = (admins) => {
  return admins.map((admin) => adminFormatter(admin));
};
export const createPartner = async (values) => {
  const payload = {
    name: values.name,
    email: values.email,
    password: values.password,
    phone_number: values.phone_number,
    type: 4,
  };
  try {
    const { data } = await axios.post('/api/dealer/create', payload);
    console.log('data', data);

    if (data?.status) {
      dispatch(setAuthData(data?.data));
      successToast(data.message);
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    console.log('error', error);
    errorToast('Something went wrong!');
  }
};

export const ListPartners = async (e) => {
  try {
    const { data } = await axios.post('/api/service-partners/list');

    if (data?.status) {
      return adminsFormatter(data?.data);
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    errorToast('Listing failed');

    console.error('Listing failer failed', error);
  }
};

export const deletePartner = async (values) => {
  const payload = {
    name: values.name,
    email: values.email,
    password: values.password,
    phone_number: values.phone_number,
    type: 4,
  };
  try {
    const { data } = await axios.delete('/api/dealer/create', payload);
    console.log('data', data);

    if (data?.status) {
      dispatch(setAuthData(data?.data));
      successToast(data.message);
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    console.log('error', error);
    errorToast('Something went wrong!');
  }
};

export const editPartner = async (values) => {
  const payload = {
    name: values.name,
    email: values.email,
    password: values.password,
    phone_number: values.phone_number,
    type: 4,
  };
  try {
    const { data } = await axios.post('/api/dealer/create', payload);
    console.log('data', data);

    if (data?.status) {
      dispatch(setAuthData(data?.data));
      successToast(data.message);
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    console.log('error', error);
    errorToast('Something went wrong!');
  }
};
