import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Item, ItemsList, SuccessContainer } from "./style";
import Illustration from '../../Assets/Illustration.svg'

export function Success() {
    return(
        <SuccessContainer>
            <p>Uhu! Pedido confirmado</p>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <div>
                <ItemsList>
                    <Item itemColor="purple">
                        <span><MapPin size={16}/></span> <p>Entrega em <b>Rua joão Daniel Martinelli, 102</b><br />Farrapos - Porto Alegre</p>
                    </Item>
                    <Item itemColor="yellow">
                        <span><Timer size={16}/></span> <p>Previsão de entrega <br /> <b>20 min - 30 min</b></p>
                    </Item>
                    <Item itemColor="orange">
                        <span><CurrencyDollar size={16}/></span> <p>Pagamento na entrega <br /> <b>Cartão de crédito</b></p>
                    </Item>
                </ItemsList>
                <img src={Illustration} alt="" />
            </div>
        </SuccessContainer>
    )
}