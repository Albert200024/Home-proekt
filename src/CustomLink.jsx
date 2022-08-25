import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

  function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "rgb(39, 174, 96)" : "unset" }}
          to={to}
          className="link"
        >
          {children}
        </Link>
      
      </div>
    );
  }
  
  export default CustomLink