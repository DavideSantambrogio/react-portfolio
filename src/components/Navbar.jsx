import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top pt-4 pb-3 ">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to={'/'}>Home</Link>
                        <a className="nav-link" href="#about">Chi sono</a>
                        <a className="nav-link" href="#background">Esperienze e Formazione</a>
                        <Link className="nav-link" to={'/projects'}>Progetti</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
