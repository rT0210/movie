const Logo = () => {
  const base = import.meta.env.BASE_URL
  return <img className="w-30 h-10" src={`${base}img/logo.svg`} alt="logo" />;
};
export default Logo;
