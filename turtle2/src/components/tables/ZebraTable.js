import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { Box, Container } from '@mui/system';
import {PageActions} from '../PageActions'

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'id5', name: 'ID' },
  { key: 'id4', name: 'ID' },
  { key: 'id3', name: 'ID' },
  { key: 'id2', name: 'ID' },
  { key: 'id1', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 2, title: 'Example' },
  { id: 3, title: 'Example' },
  { id: 4, title: 'Example' },

];

function ZebraTable() {
 
  return( 
  
  <>
  <DataGrid columns={columns} rows={rows} />          
  </>  


  )
}

export default ZebraTable