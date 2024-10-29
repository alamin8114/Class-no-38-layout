import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="main-menu">
      <div className="container">
        <div className="menu-row">
          <div className="logo">
            <h1>Alamin Islam</h1>
          </div>
          <div className="main-nav">
            <ul>
              <li><link to="/">Home</link></li>
              <li><link to="/About">About</link></li>
              <li><link to="/Blog">Blog</link></li>
              <li><link to="/Contain">contain</link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar