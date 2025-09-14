import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div className="navbar" style={{backgroundColor: 'lightgray', display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center', marginBottom: '20px'}}>
      <h1>My Company</h1>
      <div>
        <Link to='/' style={{padding: '0 10px'}}>Home</Link>
        <Link to='/about' style={{padding: '0 10px'}}>About</Link>
        <Link to={'/services'} style={{padding: '0 10px'}}>Services</Link>
        <Link to={'/contact'} style={{padding: '0 10px'}}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar