import '../navabar/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook, faBriefcase, faGraduationCap, faHome, faPhone, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/im-symbol.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg border border-top-0 border-start-0 border-end-0  borderShodow fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning c-logo" href="#Home"><img src={Logo} alt='logo' className='logo' /><span className='I'>Industrial</span><span className='text-darkBlue M'>Mentors</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><FontAwesomeIcon icon={faBars} /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mt-1 mb-lg-0">
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faHome} className='text-darkBlue'/>
                                <a className="nav-link py-0 active text-darkBlue" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faGraduationCap} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue " href="#Course">Course</a>
                            </li>
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faUserGroup} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue" href='#Membership'>Membership</a>
                            </li>
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faBriefcase} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue " href='#Jobs'>Jobs</a>
                            </li>
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faBook} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue " href='#About'>About</a>
                            </li>
                            <li className="nav-item text-center iconFontSize">
                                <FontAwesomeIcon icon={faPhone} className='text-darkBlue' />
                                <a className="nav-link py-0 text-darkBlue" href='#Contact'>Contact</a>
                            </li>
                            <li className='slide'></li>
                        </ul>
                        <div className='btn-sec'>
                            <button className='btn btn-primary mx-2 px-4 rounded-pill'>Login</button>
                            <button className='btn btn-danger rounded-pill'>Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar