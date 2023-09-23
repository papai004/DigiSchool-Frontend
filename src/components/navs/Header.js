function Header(props) {

    const styles = {
        textAlign: 'center',
        height: '4rem',
    }
  return (
    <div style={styles}>
      { props.children }
    </div>
  )
}

export default Header;
