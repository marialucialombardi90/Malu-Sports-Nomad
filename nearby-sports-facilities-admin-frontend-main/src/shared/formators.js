import moment from 'moment';

export const singleUserFormator = (data) => ({
  ...data,
  name: `${data.first_name} ${data.last_name}`,
  dob: moment(new Date(data.date_of_birth)).format('llll'),
});

export const usersFormator = (userData) => userData?.map((data) => singleUserFormator(data));
