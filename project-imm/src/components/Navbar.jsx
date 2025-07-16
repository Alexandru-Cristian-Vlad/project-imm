import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link to="/dashboard/home" className="navbar-brand">
          IMM
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/dashboard/home"
                className="nav-link"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/dashboard/reports"
                className="nav-link"
                aria-current="page"
              >
                Reports
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/dashboard/inventory"
                className="nav-link"
                aria-current="page"
              >
                Inventory
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/dashboard/manufacturing"
                className="nav-link"
                aria-current="page"
              >
                Manufacturing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
