
const NavBar = ({setCategory}) =>{
    return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{border:"3px solid white"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-danger text-dark fs-6 border-primary">News App</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ml-10 ">
          <div className="nav-link" onClick={() => setCategory("technology")} >Technology</div>
        </li>

         <li className="nav-item ml-20">
          <div className="nav-link" onClick={() => setCategory("business")} >Business</div>
        </li>

         <li className="nav-item ml-20">
          <div className="nav-link" onClick={() => setCategory("health")} >Health</div>
        </li>

         <li className="nav-item ml-20">
          <div className="nav-link" onClick={() => setCategory("sports")} >Sports</div>
        </li>

         <li className="nav-item ml-2">
          <div className="nav-link" onClick={() => setCategory("entertainment")} >EnterTainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;