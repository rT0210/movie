const Button = ({onClick, children, bg, width, color}) => {
    return (
        <button className={`${bg} ${width} ${color}`} onClick={onClick}>{children}</button>
    )
}
export default Button