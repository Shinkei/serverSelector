import React from 'react'
import {createUseStyles} from 'react-jss'
import logo from '../../img/logo_aiven.svg'

const useStyles = createUseStyles({
  header: {
    backgroundColor: 'white',
    height: 70,
    boxShadow: 'rgba(8, 35, 48, 0.24) 0px 2px 4px',
    padding: '0px 16px',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 'auto'
  },
  title: {
    fontFamily: 'ubuntu',
    fontWeight: 400,
    textAlign: 'center'
  },
  container: {
    width: '100%'
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <img
        src={logo}
        alt='aiven logo'
        className={classes.logo}
      ></img>
      <div className={classes.container}>
        <h2 className={classes.title}>
          Server Selector
        </h2>
      </div>
    </header>
  )
}

export default Header