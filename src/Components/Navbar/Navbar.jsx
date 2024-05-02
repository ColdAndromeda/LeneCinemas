import "./navbar.css";
import Logo from "../../Images/LeneCinemasLogo.png";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
        <span className="logo">
          <img src={Logo} alt="Logo"/>
        </span>
                <span className="Name">
          <li>Lene Cinemas</li>
        </span>
                <ul>
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/Movies")}>MOVIES</li>
                    <li onClick={() => navigate("/TvSeries")}>TV SERIES</li>
                    <li onClick={() => navigate("/Contact")}>CONTACT US</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
