export const LoginSliders = [
  {
    image: '/images/auth/connectwithanydevice.png',
    name: 'Login to the admin panel.',
    description: 'Everything you need is an internet connection.',
  },
  {
    image: '/images/auth/joinus.png',
    name: 'Seamless Workflow',
    description: 'Just login and start your administrator journey.',
  },
  // {
  //   image: '/images/auth/otp.png',
  //   name: '2 Factor Security',
  //   description: "OTP is received during login to ensure exclusive access to the user's account.",
  // },
];

export const UsersTableColumn = [
  {
    headerName: 'Name',
    field: 'name',
    minWidth: 200,
  },
  {
    headerName: 'Email Address',
    field: 'email',
    minWidth: 300,
  },
  // {
  //   headerName: 'Gender',
  //   field: 'gender',
  //   minWidth: 200,
  // },
  // {
  //   headerName: 'Address',
  //   field: 'address',
  //   minWidth: 200,
  // },
  // {
  //   headerName: 'City',
  //   field: 'city',
  //   minWidth: 200,
  // },
  // {
  //   headerName: 'State',
  //   field: 'state',
  //   minWidth: 200,
  // },
  // {
  //   headerName: 'Country',
  //   field: 'country',
  //   minWidth: 200,
  // },
  // {
  //   headerName: 'DOB',
  //   field: 'dob',
  //   minWidth: 300,
  // },
  // {
  //   headerName: 'ACTIONS',
  //   cellRenderer: 'UserActionRenderer',
  //   minWidth: 150,
  // },
];

export const BookingsColumnDefs = [
  { headerName: 'User', field: 'userName', minWidth: 200 },
  { headerName: 'Booked At', field: 'booked_at', minWidth: 250 },
  { headerName: 'Booked For', field: 'booked_for', minWidth: 250 },
  { headerName: 'Amount', field: 'amount', minWidth: 200 },
  { headerName: 'Facility Name', field: 'facility.name', minWidth: 200 },
  { headerName: 'Facility Location', field: 'facility.address', minWidth: 300 },
  { headerName: 'Status', field: 'status', cellRenderer: 'ChipRenderer', minWidth: 200 },
  { headerName: 'Reason For Decline', field: 'decline_reason', minWidth: 200 },
  { headerName: 'Action', field: 'action', cellRenderer: 'ActionRenderer', minWidth: 200 },
];

export const FacilitiesTableColDef = [
  {
    headerName: 'Facility name',
    field: 'name',
    minWidth: 200,
  },
  {
    headerName: 'Facility Category',
    field: 'category',
    minWidth: 200,
  },
  {
    headerName: 'Trainer',
    field: 'trainer',
    cellRenderer: 'ChipRenderer',
    minWidth: 100,
  },
  {
    headerName: 'Opening Time',
    field: 'open_time',
    minWidth: 200,
  },
  {
    headerName: 'Closing Time',
    field: 'close_time',
    minWidth: 150,
  },
  {
    headerName: 'Days',
    field: 'no_of_days',
    minWidth: 150,
    cellStyle: {
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      overflow: 'hidden',
      padding: 0,
    },
  },

  {
    headerName: 'Address',
    field: 'address',
    minWidth: 320,
  },
  {
    headerName: 'City',
    field: 'city',
    minWidth: 150,
  },
  {
    headerName: 'State',
    field: 'state',
    minWidth: 150,
  },
  {
    headerName: 'Country',
    field: 'country',
    minWidth: 150,
  },
  {
    headerName: 'Booking Option',
    field: 'booking',
    cellRenderer: 'ChipRenderer',
    minWidth: 100,
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 200,
    cellStyle: {
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      overflow: 'hidden',
      padding: 0,
    },
  },
  {
    headerName: 'Price',
    field: 'price',
    minWidth: 100,
  },
  {
    headerName: 'Period',
    field: 'period',
    minWidth: 150,
  },
  {
    headerName: 'ACTIONS',
    cellRenderer: 'FacilitiesActionRenderers',
    minWidth: 200,
  },
];

export const ExerciseTableColDef = [
  {
    headerName: 'Exercise name',
    field: 'name',
    minWidth: 200,
  },
  {
    headerName: 'Exercise Category',
    field: 'category',
    minWidth: 200,
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 300,
    cellStyle: {
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      overflow: 'hidden',
      padding: 0,
    },
  },
  {
    headerName: 'ACTIONS',
    cellRenderer: 'FacilitiesActionRenderers',
    minWidth: 200,
  },
];

export const QueriesTableColDef = [
  {
    headerName: 'User`s Name',
    field: 'name',
    minWidth: 200,
  },
  {
    headerName: 'Email',
    field: 'email',
    minWidth: 250,
  },
  {
    headerName: 'City',
    field: 'city',
    minWidth: 100,
  },
  {
    headerName: 'Country',
    field: 'country',
    minWidth: 200,
  },
  {
    headerName: 'Message',
    field: 'message',
    minWidth: 300,
  },
];
export const ViewSystemtableColDef = [
  {
    headerName: 'OUTPUT VOLTAGE',
    field: 'outputVoltage',
    minWidth: 200,
  },
  {
    headerName: 'BATTERY VOLTAGE',
    field: 'batteryVoltage',
    minWidth: 200,
  },
  {
    headerName: 'UPS TYPE',
    field: 'upsType',
    minWidth: 200,
  },
  {
    headerName: 'TEMPERATURE',
    field: 'temperature',
    minWidth: 200,
  },
  {
    headerName: 'UPDATE DATE',
    field: 'updateDate',
    minWidth: 200,
  },
];
