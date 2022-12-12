import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="header__nav">
                <NavLink to={"/"} className="logo" >
                    FriendTo
                </NavLink>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Español
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className="btn__1">
                            iniciar sesión
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header