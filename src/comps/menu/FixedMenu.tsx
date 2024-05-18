import { Link, useLocation } from "react-router-dom";
import "./FixedMenu.css"; // Make sure to import the custom CSS file

function FixedMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkText = currentPath === "/" ? "Discover" : "Home";
  const linkTo = currentPath === "/" ? "/discover" : "/";

  return (
    <nav className="bg-dark text-bpink fixed right-0 top-0 flex w-fit gap-2 rounded-bl p-4 font-bold sm:text-3xl">
      <Link to={linkTo} className="link-with-blob relative">
        {linkText}
      </Link>
    </nav>
  );
}

export default FixedMenu;
