const style = {
    backgroundColor: 'white',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    maxWidth: '680px',
    marginLeft: '2rem',

}

const StyledCard = (props) => {
    return(
        <div style={style}>{ props.children }</div>
    );
};
export default StyledCard;