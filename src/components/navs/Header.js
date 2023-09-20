import React from 'react'

function Header(props) {

    const styles = {
        textAlign: 'center',
    }
  return (
    <div style={styles}>
      <h1><u>{props.title}</u></h1>
    </div>
  )
}

export default Header;
