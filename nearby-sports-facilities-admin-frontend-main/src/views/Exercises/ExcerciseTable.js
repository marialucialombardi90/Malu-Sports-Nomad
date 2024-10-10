import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Importing Axios
import { ExerciseTableColDef } from '../utilities/helpers';
import FacilitiesActionRenderers, { ChipRenderer } from './ExcerciseActionRenderers';
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

const frameworkComponents = {
  FacilitiesActionRenderers,
  ChipRenderer,
};

const ExcerciseTable = () => {
  const [exerciseData, setExerciseData] = useState(null); // State to store exercise data

  // Fetch data from the /exercises API using Axios
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        dispatch(setShowBeatLoader());

        const { data } = await axios.get('/exercises'); // Using Axios to fetch data
        // Assuming the API returns an array of exercise objects
        if (data) {
          setExerciseData(data);
        }
      } catch (error) {
        setExerciseData([]);
        console.error('Error fetching exercises:', error);
      } finally {
        dispatch(setHideBeatLoader());
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ margin: '10px 0', height: '60vh' }}>
      <AgGridReact
        rowData={exerciseData} // Set the fetched exercise data
        defaultColDef={defaultColDef}
        columnDefs={ExerciseTableColDef}
        suppressScrollOnNewData={true}
        rowSelection="single"
        components={frameworkComponents}
      />
    </div>
  );
};

export default ExcerciseTable;
