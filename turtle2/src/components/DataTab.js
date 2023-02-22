import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DataTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
    props.setContext(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="ALLOCATE" />
        <Tab label="ZEBRA" />
        <Tab label="WEDGE" />
        <Tab label="FROG" />
        <Tab label="TRUTH" />
      </Tabs>
    </Box>
  );
}