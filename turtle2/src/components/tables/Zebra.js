import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { Box, Container } from '@mui/system';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function ZebraTable() {
 
  return( 
    <Container>
      
            <Box> 
                <DataGrid columns={columns} rows={rows} />
            </Box>

    </Container>
  )
}

export default ZebraTable