const Nav = ({ children }) => {
  return (
    <nav>
      <ul className="flex gap-2 text-white">{children}</ul>
    </nav>
  );
};
export default Nav;
