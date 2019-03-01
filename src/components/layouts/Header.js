import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import header from './header.png'



export default props =>

<div>
      <AppBar position="static" style={{background: 'black', height: 30}}>
      </AppBar>
      <figure>
      <img src={header} alt="Logo" style={{width: null, height: null}} />
      </figure>
      <AppBar position="static" style={{background: 'white', height: 30}}>
      <Toolbar>
        <Typography variant="h6" color="error">
          Header
        </Typography>
      </Toolbar>
      </AppBar>
</div>
