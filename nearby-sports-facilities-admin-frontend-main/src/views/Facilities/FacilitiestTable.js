import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Importing Axios
import { FacilitiesTableColDef } from '../utilities/helpers';
import FacilitiesActionRenderers, { ChipRenderer } from './FacilitiesActionRenderers';
import { setHideBeatLoader, setShowBeatLoader } from 'src/reducers/slices/AlertsSlice';
import { dispatch } from 'src/reducers/configureStore';

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
  FacilitiesActionRenderers,
  ChipRenderer,
};

const SystemManagementTable = () => {
  const [facilitiesData, setFacilitiesData] = useState(null);

  // Fetch data from the /facilities API using Axios
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        dispatch(setShowBeatLoader());

        const { data } = await axios.get('/facilities'); // Using Axios to fetch data
        // Assuming the API returns an array of facility objects
        if (data) {
          setFacilitiesData(data);
        } else {
          setFacilitiesData([]);
        }
      } catch (error) {
        setFacilitiesData([]);

        console.error('Error fetching facilities:', error);
      } finally {
        dispatch(setHideBeatLoader());
      }
    };

    fetchFacilities();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ margin: '10px 0', height: '60vh' }}>
      <AgGridReact
        rowData={facilitiesData}
        defaultColDef={defaultColDef}
        columnDefs={FacilitiesTableColDef}
        suppressScrollOnNewData={true}
        rowSelection="single"
        components={frameworkComponents}
      />
    </div>
  );
};

export default SystemManagementTable;
