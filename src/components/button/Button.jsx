const Button = ({onClick, children, bg, width, color, className = "cursor-pointer", radius = "rounded-none"}) => {
    return (
        <button className={`font-bold ${bg} ${width} ${color} ${className} ${radius} px-1`} onClick={onClick}>{children}</button>
    )
}
export default Button