import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    border: 'solid 1px',
    borderColor: '#F38361',
    borderRadius: 4,
    color: '#F38361',
    textAlign: 'center',
    fontFamily: 'ubuntu'
  }
})

const Card = ({name}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p>{name}</p>
    </div>
  )
}

export default Card