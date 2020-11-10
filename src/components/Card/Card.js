import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    border: 'solid 1px',
    borderColor: '#F38361',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    color: '#F38361',
    textAlign: 'center',
    fontFamily: 'ubuntu',
    cursor: 'pointer'
  }
})

const Card = ({name, onClick}) => {
  const classes = useStyles()
  return (
    <button className={classes.root} onClick={() => onClick(name)}>
      <p>{name}</p>
    </button>
  )
}

export default Card