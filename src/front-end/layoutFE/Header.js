import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {

  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
        <img src={require('../../img-avata/logo.png')} alt="My Avatar" style={{borderRadius: "50%", width: "150px"}} />

          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" className="m-4" variant="h5" component="h1" style={{fontSize: "70px", fontFamily: "Roboto", fontWeight: "bold"}}>
                Shop gia dụng
              </Typography>
            </Grid>
          </Grid>  
        </Toolbar>
      </AppBar>
      
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;