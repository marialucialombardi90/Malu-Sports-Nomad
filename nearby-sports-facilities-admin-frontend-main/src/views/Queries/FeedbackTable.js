import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { QueriesTableColDef } from '../utilities/helpers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { dispatch } from 'src/reducers/configureStore';
import { setHideBeatLoader, setShowBeatLoader } from 'src/reducers/slices/AlertsSlice';

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

const FeedbackTable = () => {
  const [queriesData, setQueriesData] = useState([]);

  // Fetch data from the /contacts API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        dispatch(setShowBeatLoader());
        const { data } = await axios.get('/contacts');
        if (data) {
          setQueriesData(data);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        dispatch(setHideBeatLoader());
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ margin: '10px 0', height: '60vh' }}>
      <AgGridReact
        rowData={queriesData}
        defaultColDef={defaultColDef}
        columnDefs={QueriesTableColDef}
        suppressScrollOnNewData={true}
        rowSelection="single"
      />
    </div>
  );
};

export default FeedbackTable;
