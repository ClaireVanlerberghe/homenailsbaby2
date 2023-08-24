import { NavLink } from 'react-router-dom'
import "../Button/Button.css"

function Button({titre, link}) {
    return(
        <NavLink to={link} className="buttonLink">
            <button className="button" type='button'>{titre}</button>
        </NavLink>
    )
}

export default Button;