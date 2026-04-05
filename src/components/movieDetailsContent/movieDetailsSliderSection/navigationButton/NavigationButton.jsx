const NavigationButton = ({ disabled, onClick, direction }) => {
  const imageArrow =
    direction === "left" ? "/img/left-arrow.png" : "/img/right-arrow.png";
  const currentClassName =
    direction === "left"
      ? "w-10 h-10 absolute top-10 left-0 md:left-[10%] lg:left-4 lg:top-12.5"
      : "w-10 h-10 absolute top-10 right-0 md:right-[10%] lg:right-4 lg:top-12.5";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={currentClassName}
    >
      <img src={imageArrow} alt="arrow" />
    </button>
  );
};
export default NavigationButton;
