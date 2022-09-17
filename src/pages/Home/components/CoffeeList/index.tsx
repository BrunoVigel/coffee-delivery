import { BuyButtons, BuyContainer, CoffeeListContainer, Item, ItemDescription, ItemList, ItemTags, Title } from "./style";
import TestImg from '../../../../Assets/images/image.png'
import { Minus, Plus, ShoppingCart } from "phosphor-react";


export function CoffeeList() {
    return(
        <CoffeeListContainer>
            <Title>Nossos cafés</Title>
            <ItemList>
                <Item>
                    <img src={TestImg} alt="" />
                    <ItemTags>
                        <p>Tradicional</p>
                    </ItemTags>
                    <ItemDescription>
                        <p>Expresso Tradicional</p>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                    </ItemDescription>
                    <BuyContainer>
                        <p><span>R$</span>9,90</p>
                        <BuyButtons>
                            <div>
                                <button><Minus /></button>
                                <span>2</span>
                                <button><Plus /></button>
                            </div>
                            <button><ShoppingCart size={16} color="#FFFFFF"/></button>
                        </BuyButtons>
                    </BuyContainer>
                </Item>
            </ItemList>
        </CoffeeListContainer>
    )
}