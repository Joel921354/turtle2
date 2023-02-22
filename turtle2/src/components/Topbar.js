import { Box,Toolbar,AppBar, Icon, Button, Container, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

 const Topbar = () => {

return(
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Avatar size='sm'src='../img/turtle_1f422.gif'/>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            &nbsp;Data Management Platform
          </Typography>
          <Button color="inherit">logout</Button>
        </Toolbar>
      </AppBar>
    </Box>)
}
    export default Topbar;