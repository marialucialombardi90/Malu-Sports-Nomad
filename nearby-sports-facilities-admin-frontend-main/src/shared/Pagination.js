import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComponent = ({ totalPages, currentPage, handleChangePage }) => {
  
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        shape="rounded"
        variant="outlined"
      />
    </Stack>
  );
};

export default PaginationComponent;
