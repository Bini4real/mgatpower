import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
      <div className="navbar container">
      <h2><img className="logo" src="/logotech.png" alt="Company Logo"></img></h2>

      <div className="nav-links">
        <Link to="/">Home</Link> 
        <Link to="/servicesPage"> Services</Link>  
        <Link to="/solutionsPage"> Solutions</Link>  
        <Link to="/aboutPage"> About</Link>  
        <Link to="/contactPage"> Contact</Link>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;