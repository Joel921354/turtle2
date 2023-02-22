import {React,  useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ZebraTable from '../components/tables/ZebraTable';
import { BottomNavigation, Grid } from '@mui/material';
import DataTab from '../components/DataTab';
import PageActions from './PageActions';
import DataLead from './DataLead';
import { Stack } from '@mui/system';
import BottomActions from './BottomActions';

export const BodyContent = () => {

    const [context, setContext] = useState('ALLOCATE');

    return( <>
        <DataTab setContext={setContext}></DataTab>
        <Grid container spacing={2}>
            <Grid item><DataLead dataLeadTitle={context}/> </Grid>
            <Grid width='80%'item><ZebraTable/> <PageActions></PageActions></Grid>

           
        </Grid>
       
        </>
    )

}

export default BodyContent