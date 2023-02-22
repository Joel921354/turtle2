import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { Box, Container } from '@mui/system';
import {PageActions} from '../PageActions'

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'id', name: 'ID' },
  { key: 'id', name: 'ID' },
  { key: 'id', name: 'ID' },
  { key: 'id', name: 'ID' },
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function ZebraTable() {
 
  return( 
  
  <>
  <DataGrid columns={columns} rows={rows} />          
  </>  


  )
}

export default ZebraTable