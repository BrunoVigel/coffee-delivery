import { HeaderContainer } from "./style";
import Logo from '../../Assets/Logo.svg'
import { NavLink } from "react-router-dom";
import {MapPin, ShoppingCart} from 'phosphor-react'


export function Header() {
    return(
        <HeaderContainer>
            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
            <nav>
                <span><MapPin size={22}/>Porto Alegre, RS</span>
                <NavLink to="/Checkout"><ShoppingCart size={22}/></NavLink>
            </nav>
        </HeaderContainer>
    )
}