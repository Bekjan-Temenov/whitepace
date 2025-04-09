import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1480px] w-[95%]  sm:w-[90%]  mx-auto'>
      {children}
    </div>
  )
}

export default Container
