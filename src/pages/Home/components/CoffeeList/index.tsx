import { BuyButtons, BuyContainer, CoffeeListContainer, Item, ItemDescription, ItemList, ItemTags, Title } from "./style";
// import TestImg from '../../../../Assets/image.png'
import { Minus, Plus, ShoppingCart } from "phosphor-react";


export function CoffeeList() {
    return(
        <CoffeeListContainer>
            <Title>Nossos cafés</Title>
            <ItemList>
                <Item>
                    {/* <img src={TestImg} alt="" /> */}
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
                                <button><Minus color="#8047F8"/></button>
                                <span>1</span>
                                <button><Plus color="#8047F8"/></button>
                            </div>
                            <button><ShoppingCart size={16} color='#F3F2F2'/></button>
                        </BuyButtons>
                    </BuyContainer>
                </Item>
            </ItemList>
        </CoffeeListContainer>
    )
}