import axios from 'src/utils/axios';
import { dispatch } from 'src/reducers/configureStore';
import { setAuthData } from 'src/reducers/slices/AuthSLice';
import { errorToast, successToast } from 'src/shared/Toast';

const systemFormatter = (system) => {
  return {
    first_name: system.first_name,
    last_name: system.last_name,
    email: system.email,
    deviceName: system.deviceName,
    serialNumber: system.serialNumber,
    servicePartner: system.servicePartner,
    customerName: system.customerName,
    modelNumber: system.modelNumber,
    wifiModuleAddress: system.wifiModuleAddress,
    MACAddress: system.MACAddress,
    activationDate: system.activationDate,
    uploadDate: system.uploadDate,
    batteryStatus: system.batteryStatus,
  };
};

const systemsFormatter = (systems) => {
  return systems.map((system) => systemFormatter(system));
};
export const createSystem = async (values) => {
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

export const ListSystems = async (e) => {
  const body = {
    type: 3,
  };
  try {
    const { data } = await axios.post('/api/user/listing', body);

    if (data?.status) {
      dispatch(setAuthData(systemsFormatter(data?.data)));
      successToast(data.message);
    } else {
      errorToast(data.message);
    }
  } catch (error) {
    errorToast('Listing failed');

    console.error('Listing failer failed', error);
  }
};

export const deleteSystem = async (values) => {
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

export const editSystem = async (values) => {
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
