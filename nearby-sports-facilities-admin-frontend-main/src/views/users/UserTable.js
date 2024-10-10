import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { UsersTableColumn } from '../utilities/helpers';
// import UserActionRenderer from './UserActionRenderer';
// import StatusRenderer from '../../shared/StatusRenderer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { errorToast } from 'src/shared/Toast';
import { dispatch } from 'src/reducers/configureStore';
import { setHideBeatLoader, setShowBeatLoader } from 'src/reducers/slices/AlertsSlice';
import { usersFormator } from 'src/shared/formators';
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
  // UserActionRenderer,
  // StatusRenderer,
};

const UserTable = () => {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        dispatch(setShowBeatLoader());
        const { data } = await axios.get('/users');
        const formatedData = usersFormator(data);
        if (data) {
          setUsersData(formatedData);
        } else {
          setUsersData([]);
        }
      } catch (e) {
        errorToast(e?.message ?? 'Something went wrong!!');
      } finally {
        dispatch(setHideBeatLoader());
      }
    })();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ margin: '10px 0', height: '60vh' }}>
      <AgGridReact
        rowData={usersData}
        defaultColDef={defaultColDef}
        columnDefs={UsersTableColumn}
        suppressScrollOnNewData={true}
        rowSelection="single"
        components={frameworkComponents}
      />
    </div>
  );
};

export default UserTable;
