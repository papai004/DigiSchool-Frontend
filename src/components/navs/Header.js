function Header(props) {

    const styles = {
        textAlign: 'center',
        height: '4rem',
    }
  return (
    <div style={styles}>
      { props.title }
    </div>
  )
}

export default Header;
