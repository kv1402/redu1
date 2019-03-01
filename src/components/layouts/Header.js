import React from 'react'
import {AppBar, Toolbar, Typography, Button, InputBase} from '@material-ui/core';
import header from './header.png'
import { fade } from '@material-ui/core/styles/colorManipulator';

export default props =>

<div>
      <AppBar position="static" style={styles.appBar}>
      </AppBar>
      <figure style={styles.figure}>
        <img src={header} alt="Logo" style={styles.headerLogo} />
      </figure>
      <AppBar position="static" style={{background: 'white', height: 30}}>
      <Toolbar style={styles.toolbar}>
      <Button style={styles.button} href="#text-buttons">Forsiden</Button>
      <Button style={styles.button} href="#text-buttons">Om</Button>
      <Button style={styles.button} href="#text-buttons">Hjelp</Button>
      <Button style={styles.button} href="#text-buttons">Digital Kompetanse</Button>
      <InputBase style={styles.search}
        placeholder="Search…"
      />
      </Toolbar>
      </AppBar>
</div>

const styles = {
  appBar: {
    background: 'black',
    height: 30
  },
  headerLogo: {
    width: '100%',
    height: null
  },
  figure: {
    margin: 0,
  },
  button: {
     height: '30%',
     marginTop: -30,
     justifyContent: 'center',
     alignItems: 'center',
     fontWeight: 'bold'
  },
  search: {
      position: 'relative',
      marginTop: -30,
      alignItems: 'centered',
    },
  toolbar: {
    justifyContent: 'centered',
    float       : 'none',
    marginLeft  : 'auto',
    marginRight : 'auto'
  }
}
