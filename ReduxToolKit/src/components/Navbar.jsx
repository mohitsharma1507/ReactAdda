import { useEffect, useState } from "react";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="container" style={{ padding: "8rem" }}>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "sans-serif",
          fontWeight: "800",
        }}
      >
        Welcome Back To Work
      </div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          color: "gray",
          transition: "all 2s linear",
          opacity: animate ? 1 : 0, // Transition effect
          fontSize: "60px",
          fontFamily: "sans-serif",
          fontWeight: "600",
          transform: animate ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        Admin Table
      </h1>

      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div
            className="container-fluid"
            style={{ display: "flex", gap: "9rem" }}
          >
            <a className="navbar-brand" href="#">
              Redux App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className="navbar-nav "
                style={{ display: "flex", gap: "9rem" }}
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
