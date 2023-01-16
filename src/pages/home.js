import logo from "../images/logo.png";
import infoicon from "../images/info_icon.png";
import transporticon from "../images/transport_icon.png";
import ratinginfo from "../images/rating_icon.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faClose, faCartPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Men from "./men";

function Home() {
    return (
        <section className="header">
            <nav>
                <div className="nav-logo">
                    <a href="index.html"><img src={logo}/></a>
                </div>
                <div className="nav-links" id="navLinks">
                    <ul>
                        <li onClick={hideMenu}><FontAwesomeIcon className="fa" icon={faClose}/></li>
                        <li><NavLink to="/" style={({ isActive }) =>
                            isActive
                                ? {
                                    color: "#f44336",
                                }
                                : { color: "" }}>What's New</NavLink></li>
                        <li><NavLink to="/men" style={({ isActive }) =>
                            isActive
                                ? {
                                    color: "#f44336",
                                }
                                : { color: "" }}>Men</NavLink></li>
                        <li><a href="https://www.nike.com/w/womens-shoes-5e1x6zy7ok">Women</a></li>
                        <li><a href="">Kids</a></li>
                        <li><a href="">Personalize</a></li>
                        <li><a href="">Collections</a></li>
                        <li><a href="">Sales</a></li>
                        <li><div className="box"><input type="text" placeholder="Search..."/><a href="#"><FontAwesomeIcon icon={faSearch}/></a></div></li>
                    </ul>
                </div>
                <button onClick={showMenu}><FontAwesomeIcon className="fa" icon={faBars}/></button>
                <div className="nav-right">
                    <a href="index.html"><FontAwesomeIcon icon={faCartPlus} /></a>
                </div>
            </nav>
            <section className="main-elements">
                <div className="left-pane"></div>
                <div className="center-pane">
                    <h1>
                        Feel Strong<br/>
                        like Lebron
                    </h1>
                    <h3>
                        The LeBron 17 LMTD features a<br/> large Max Air unit in the heel<br/> and Zoom Air cushioning
                        for<br/> extra
                        comfort.
                    </h3>
                    <h3>
                        Knit materila wraps your feet<br/> for lightweight support so you<br/> can make quick,
                        powerful<br/> moves like a
                        champ.
                    </h3>
                    <div className="shop">
                        <div className="drop-down">
                            <select name="size" id="size" value="43" readOnly>
                                <option value="42">EU 42</option>
                                <option value="43">EU 43</option>
                                <option value="44">EU 44</option>
                                <option value="45">EU 45</option>
                            </select>
                        </div>
                        <div className="basket">
                            <button>Add to basket</button>
                            <div>
                                $249
                            </div>
                        </div>
                    </div>
                    <div className="icons">
                        <a href="index.html"><img src={infoicon}/></a>
                        <a href="index.html"><img src={transporticon}/></a>
                        <a href="index.html"><img src={ratinginfo}/></a>

                    </div>
                </div>
                <div className="right-pane"></div>
            </section>
        </section>
    )
    function showMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right="0";
    }
    function hideMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right="-200px";
    }
}
export default Home;


