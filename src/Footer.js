import React from 'react'

const Fooder = () => {
   
  const year = new Date()

  return (
    
    <footer>
              the year @copy {year.getFullYear()}
    </footer>
  )
}

export default Fooder
