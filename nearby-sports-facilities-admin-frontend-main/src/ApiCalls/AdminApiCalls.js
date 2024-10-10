import axios from 'src/utils/axios';
import { dispatch } from 'src/reducers/configureStore';
import { setAuthData } from 'src/reducers/slices/AuthSLice';
import { errorToast, successToast } from 'src/shared/Toast';
import { setHideBeatLoader, setShowBeatLoader } from 'src/reducers/slices/AlertsSlice';
//import { setShowBeatLoader, setHideBeatLoader } from 'app/reducers/slices/AlertsSlice';
export const UserType = {
  SUPERADMIN: 1,
  COMPANY_ADMIN: 2,
  STANDARD_USER: 3,
  PRIMARY_ADMIN: 4,
};

const adminFormatter = (admins) => {
  return {
    id: admins.id,
    first_name: admins.first_name,
    last_name: admins.last_name,
    email: admins.email,
    type:
      admins.type === UserType.SUPERADMIN
        ? 'Super Admin'
        : admins.type === UserType.COMPANY_ADMIN
        ? 'Company Admin'
        : admins.type === UserType.STANDARD_USER
        ? 'Standard User'
        : admins.type === UserType.PRIMARY_ADMIN
        ? 'Primary Admin'
        : null,
    access_level: admins.type,
    is_active: admins.is_active === true ? 'active' : 'inactive',
    active_status: admins.is_active,
  };
};

const adminsFormatter = (admins) => {
  return admins.map((admin) => adminFormatter(admin));
};
export const createAdmin = async (values) => {
  const payload = {
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    password: values.password,
    password_confirmation: values.confirmPassword,
    is_active: values.isActive,
    type: values.accessLevel,
  };
  try {
    const { data } = await axios.post('/api/users/', payload);

    if (data?.status) {
      successToast(data.message);
      return true;
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    console.log('error', error);
    errorToast('Something went wrong!');
  }
};

export const ListAdmins = async () => {
  const body = {
    type: 3,
  };
  try {
    dispatch(setShowBeatLoader());
    const { data } = await axios.post('/api/users/listing', body);

    if (data?.status) {
      return adminsFormatter(data.data);
      //successToast(data.message);
    } else {
      errorToast(data?.message);
    }
  } catch (error) {
    errorToast('Listing failed');

    console.error('Listing failer failed', error);
  } finally {
    dispatch(setHideBeatLoader());
  }
};

export const deleteAdmin = async (values) => {
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

export const editAdmin = async (values, id) => {
  const payload = {
    id: id,
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    password: values.password,
    password_confirmation: values.confirmPassword,
    is_active: values.isActive,
    type: values.accessLevel.toString(),
  };
  try {
    const { data } = await axios.put(`/api/users/update`, payload);
    console.log('data', data);

    if (data?.status) {
      successToast(data.message);
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    console.log('error', error);
    errorToast('Something went wrong!');
  }
};
