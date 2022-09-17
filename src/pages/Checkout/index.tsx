import { CheckoutContainer, CoffeeCardContainer, Divider, Item, ItemButtons, ItemInfo, OrderFormContainer, SubmitButton, TotalItemsInfo } from "./style";
import TestImage from '../../Assets/images/Image.png'
import { Minus, Plus, Trash } from "phosphor-react";

export function Checkout() {
    return(
        <CheckoutContainer>
            <OrderFormContainer>
                <b>Complete seu pedido</b>
            </OrderFormContainer>

            <CoffeeCardContainer>
                <Item>
                    <ItemInfo>
                        <img src={TestImage} alt="" />
                        <div>
                            <p>Expresso Tradicional</p>
                            <ItemButtons>
                                <div>
                                    <button><Minus /></button>
                                    <span>2</span>
                                    <button><Plus /></button>
                                </div>
                                <button><Trash size={16} color="#8047F8"/> REMOVER</button>
                            </ItemButtons>
                        </div>
                    </ItemInfo>
                    <p>
                        <b>R$ 9,90</b>
                    </p>
                </Item>
                <Divider></Divider>
                <Item>
                    <ItemInfo>
                        <img src={TestImage} alt="" />
                        <div>
                            <p>Expresso Tradicional</p>
                            <ItemButtons>
                                <div>
                                    <button><Minus /></button>
                                    <span>2</span>
                                    <button><Plus /></button>
                                </div>
                                <button><Trash size={16} color="#8047F8"/> REMOVER</button>
                            </ItemButtons>
                        </div>
                    </ItemInfo>
                    <p>
                        <b>R$ 9,90</b>
                    </p>
                </Item>
                <Divider></Divider>
                <TotalItemsInfo>
                    <div>
                        <p>Total de itens</p>
                        <p>R$ 29,70</p>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </div>
                    <div>
                        <p>
                            <b>Total</b>
                        </p>
                        <p>
                            <b>R$ 33,20</b>
                        </p>
                    </div>
                </TotalItemsInfo>
                <div>
                    <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
                </div>
            </CoffeeCardContainer>
        </CheckoutContainer>
    )
}