const Header = (props) => {
    const {
        message
    } = props;
    return(
        <div className = "header">{message}</div>
    )
}

export default Header;