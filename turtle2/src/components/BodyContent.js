import {React,  useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ZebraTable from '../components/tables/Zebra';
import { Grid } from '@mui/material';
import DataTab from '../components/DataTab';
import PageActions from '../components/PageActions';
import DataLead from './DataLead';
import { Stack } from '@mui/system';

export const BodyContent = () => {

    const [context, setContext] = useState(0) 
    return( <>
        <DataTab></DataTab>
        <Grid container spacing={2}>
            <Grid item><DataLead/> </Grid>
           
        </Grid> <ZebraTable/> 
        <PageActions></PageActions>
        </>
    )

}

export default BodyContent