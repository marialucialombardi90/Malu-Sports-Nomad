import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ActionRenderer, { ChipRenderer } from './BookingsActionRenderer';
import { BookingsColumnDefs } from '../utilities/helpers';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import { dispatch } from 'src/reducers/configureStore';
import { setHideBeatLoader, setShowBeatLoader } from 'src/reducers/slices/AlertsSlice';
import moment from 'moment';

const defaultColDef = {
  flex: 1,
  minWidth: 100,
  sortable: true,
  filter: true,
  resizable: true,
  wrapText: true,
  autoHeight: true,
  cellStyle: { display: 'flex', alignItems: 'center', fontFamily: 'Poppins, sans-serif' },
};

const frameworkComponents = {
  ActionRenderer,
  ChipRenderer,
};

const BookingsTable = () => {
  const [servicePartnerData, setServicePartnerData] = useState([]); // State to store booking data

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        dispatch(setShowBeatLoader());
        const { data } = await axios.get('/bookings'); // Fetching data from the /bookings API
        if (data) {
          const formatedData = data.map((booking) => ({
            ...booking,
            userName: `${booking.user?.first_name} ${booking.user?.last_name}`,
            booked_at: moment(booking.booked_at).format('llll'),
            booked_for: moment(booking.booked_for).format('llll'),
            amount: `€ ${booking.amount}`,
          }));
          setServicePartnerData(formatedData);
        } // Assuming the API returns an array of booking objects
      } catch (error) {
        console.error('Error fetching bookings:', error); // Handle error
      } finally {
        dispatch(setHideBeatLoader());
      }
    };

    fetchBookings(); // Call the function to fetch bookings
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ margin: '10px 0', height: '60vh' }}>
      <AgGridReact
        rowData={servicePartnerData} // Set the fetched booking data
        defaultColDef={defaultColDef}
        columnDefs={BookingsColumnDefs}
        suppressScrollOnNewData={true}
        rowSelection="single"
        components={frameworkComponents}
      />
    </div>
  );
};

export default BookingsTable;
