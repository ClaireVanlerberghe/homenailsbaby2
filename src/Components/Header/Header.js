import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import Logo from "../../logoPrincipale.png"
import "../Header/Header.css"

function Header () {
    return(
      <section className="header">
        <img src={Logo} alt="logo homenails" className="logoHeader"/>
        <div className="menu">
        <Menu titre="Accueil" link="/" />
        <Menu titre="Boutique" link="/shop" />
        <Menu titre="Contact" link="/contact" />
        <Menu titre="A propos" link="/about" />
        </div>
        <Button titre="S'inscrire" link="/signup" />
      </section>
    )
  }
  
  export default Header;