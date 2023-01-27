import Link from "next/link"

const Nav = () => {
    return (
        <>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li> 
            <li className="nav-item"><Link href="/contact-us"><a className="nav-link">Contact Us</a></Link></li>
            <li className="nav-item">
                <a className="nav-link" href="!#">About Us</a>
            </li>  
            <li className="nav-item bold"><Link href="/auth/login"><a className="nav-link loginbtn">Login / Sign Up</a></Link></li>
        </ul>
        </>
    )
}

export default Nav;