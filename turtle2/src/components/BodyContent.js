import {React,  useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ZebraTable from './tables/ZebraTable.js';
import { BottomNavigation, Grid } from '@mui/material';
import DataTab from '../components/DataTab';
import PageActions from './PageActions';
import DataLead from './DataLead';
import { Stack } from '@mui/system';
import BottomActions from './BottomActions';
import STRINGS from '../STRINGS.json'
import Allocate from './tables/Allocate.js';


export const BodyContent = () => {

    // 0 = allocation
    // 1 = zebra
    // 2 = wedge
    // 3 = frog
    // 4 = truth
    const [context, setContext] = useState(0);
    console.log(JSON.stringify(STRINGS.TABLES[0][context]), 'table')
    return( <>
        <DataTab setContext={setContext}></DataTab>
        <Grid container spacing={2}>
            <Grid item><DataLead context={context}/> </Grid>
            <Grid width='80%'item>{context == 0 ? <Allocate/> 
                                 : context == 1 ? <ZebraTable/> 
                                 : context == 2 ? "wedge"
                                 : context == 3 ? "frog"
                                 : context == 4 ? "frog" :"null"} <PageActions></PageActions></Grid>
        </Grid>
        </>
    )

}

export default BodyContent;