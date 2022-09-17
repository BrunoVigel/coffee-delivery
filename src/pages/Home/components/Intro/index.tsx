import { IntroContainer, Item } from "./style";
import IntroImg from '../../../../Assets/IntroImg.png'
import {ShoppingCart, Coffee, Timer, Package} from 'phosphor-react'

export function Intro() {
    return(
        <IntroContainer>
            <div>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>

                <div>
                    <Item itemColor="orange"><span><ShoppingCart size={16}/></span>Compra simples e segura</Item>
                    <Item itemColor="gray"><span><Package size={16}/></span>Embalagem mantém o café intacto</Item>
                    <Item itemColor="yellow"><span><Timer size={16}/></span>Entrega rápida e rastreada</Item>
                    <Item itemColor="purple"><span><Coffee size={16}/></span>O café chega fresquinho até você</Item>
                </div>
            </div>
            <img src={IntroImg} alt="" />
        </IntroContainer>
    )
}