import { AddressInputs, AddressTitle, CheckoutContainer, CoffeeCardContainer, DeliveryAddressContainer, Divider, Item, ItemButtons, ItemInfo, OrderFormContainer, PaymentButtons, PaymentMethodContainer, PaymentTitle, SubmitButton, TotalItemsInfo } from "./style";
// import TestImage from '../../Assets/Image.png'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";

export function Checkout() {
    return(
        <CheckoutContainer>
            <OrderFormContainer>
                <DeliveryAddressContainer>
                    <AddressTitle>
                        <MapPinLine size={22} color='#DBAC2C'/>
                        <div>
                            <p>Endereço de Entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </AddressTitle>
                    <AddressInputs>
                        <input type="text" placeholder="CEP"/>
                        <input type="text" placeholder="Rua"/>
                        <div>
                            <input type="text" placeholder="Número"/>
                            <input type="text" placeholder="Complemento"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Bairro"/>
                            <input type="text" placeholder="Cidade"/>
                            <input type="text" placeholder="UF"/>
                        </div>
                    </AddressInputs>
                </DeliveryAddressContainer>
                <PaymentMethodContainer>
                    <PaymentTitle>
                        <CurrencyDollar size={22} color='#8047F8'/>
                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </PaymentTitle>
                    <PaymentButtons>
                        <button><CreditCard size={16} color='#8047F8'/> CARTÃO DE CRÉDITO</button>
                        <button><Bank size={16} color='#8047F8'/> CARTÃO DE DÉBITO</button>
                        <button><Money size={16} color='#8047F8'/> DINHEIRO</button>
                    </PaymentButtons>
                </PaymentMethodContainer>
            </OrderFormContainer>

            <CoffeeCardContainer>
                <Item>
                    <ItemInfo>
                        {/* <img src={TestImage} alt="" /> */}
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
                        {/* <img src={TestImage} alt="" /> */}
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