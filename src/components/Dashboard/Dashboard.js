import React from 'react'
import Header from '../Header'
import {createUseStyles} from 'react-jss'
import Sidebar from '../Sidebar/Sidebar'

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    backgroundColor: '#FAFAFA'
  },
  content: {
    marginTop: 12,
    display: 'grid',
    gridGap: 12,
    gridTemplateColumns: '1fr 1fr 3fr'
  },
  leftSidebar: {
    height: '100vh'
  }
})

const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.content}>
        <Sidebar
          options={[{key: '1', name: 'Africa'}, {key: '2', name: 'America'}, {key: '3', name: 'Asia'}]}
          className={classes.leftSidebar}
        />
        <Sidebar
          options={[{key: '1', name: 'Africa'}, {key: '2', name: 'America'}, {key: '3', name: 'Asia'}]}
          className={classes.leftSidebar}
        />
        <Sidebar
          options={[{key: '1', name: 'Africa'}, {key: '2', name: 'America'}, {key: '3', name: 'Asia'}]}
          className={classes.leftSidebar}
        />
      </div>
    </div>
  )
}

export default Dashboard