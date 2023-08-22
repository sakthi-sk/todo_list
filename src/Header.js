import React from 'react'

const Header = ({titel ,lenght}) => {
  return (
    <header>
        <h1>{titel} </h1>
        

      <h1>   {lenght >1? ` tasks list ${lenght} ` :  lenght===0 ? null :`task list ${lenght}` }</h1>
    </header>
  )
}
Header.defaultProps = {
  titel:'to du list'
}

export default Header