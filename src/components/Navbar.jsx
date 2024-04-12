
function Navbar() {


    return (
        <>

            <nav className="navbar navbar-expand-lg fixed-top pt-4 pb-3  " data-bs-theme="dark">
                <div className="container ">
                    <h3  className="text-light" href="#">Portfolio</h3>
                    
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav gap-5">
                            <a className="nav-link text-light" aria-current="page" href="#">Chi sono</a>
                            <a className="nav-link text-light" href="#">Features</a>
                            <a className="nav-link text-light" href="#">Pricing</a>
                            
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar