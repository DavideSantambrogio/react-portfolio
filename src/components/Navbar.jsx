import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        navigate(`/#${id}`);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top pt-4 pb-3 ">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto gap-3">
                        <Link className="nav-link text-start" to={'/'}>Home</Link>
                        <Link className="nav-link text-start" to={'/technologies'}>Tecnologie</Link>
                        <Link className="nav-link text-start" to={'/projects'}>Progetti</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
