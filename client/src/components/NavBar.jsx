import PropTypes from 'prop-types';
import Modal from './Modal';


export default function NavBar() {
    function handleLogout(){
    }
    return (
        <>
            <nav className="navbar bg-success position-sticky top-0">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img className="me-2 rounded-circle" src="kannan-crackers.jpg" alt="Kannan Crackers Logo" width={32} height={30}/>
                            <span className="text-white">Kannan Crackers</span>
                    </div>
                    <div className='d-flex'>
                        <Modal/>
                        <select className="btn btn-warning me-3" aria-label="Default select example">
                            <option value="">Select Year</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <button className="btn btn-warning" onClick={handleLogout}>Log Out</button>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

NavBar.propTypes = {
    isLoggedIn: PropTypes.bool,
    setIsLoggedIn: PropTypes.func
  };