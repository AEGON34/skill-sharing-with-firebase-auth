import React from 'react'

const Mycontainer = ({children, className}) => {
  return (
    <div className={` ${className} container mx-auto tt`}>
      {children}
    </div>
  )
}

export default Mycontainer