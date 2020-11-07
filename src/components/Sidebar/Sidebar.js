import React from 'react'
import {createUseStyles} from 'react-jss'
import classNames from 'classnames'
import Card from '../Card'

const useStyles = createUseStyles({
  root:{
    backgroundColor: '#FFFFFF',
    padding: 12,
    display: 'grid',
    gridGap: 12,
    gridTemplateRows: 'repeat(auto-fill, minmax(50px, 1fr))'
  }
})

const Sidebar = ({options, className}) => {
  const classes = useStyles()
  return (
    <div className={classNames(classes.root, className)}>
      {options.map(option =>{
        return (
          <Card key={options.key} name={option.name} />
        )
      })}
    </div>
  )
}

export default Sidebar