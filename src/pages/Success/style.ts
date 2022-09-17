import styled from "styled-components";

export const SuccessContainer = styled.div`
    margin-top: 5.625rem;

    &>:nth-child(1) {
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: bold;
        color:${(props) => props.theme['yellow-dark']};
    }

    &>:nth-child(2) {
        font-size: 1.25rem;
        margin-bottom: 2.5rem
    }

    &>div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`



export const ItemsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1;
    border-radius: 6px 36px;
    width: 32.875rem;
`

const ITEM_COLOR = {
    purple: 'purple',
    orange: 'yellow-dark',
    yellow: 'yellow'
} as const;

interface ItemProps {
    itemColor: keyof typeof ITEM_COLOR;
}



export const Item = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
        background: ${(props) => props.theme[ITEM_COLOR[props.itemColor]]};
        padding: 0.5rem;
        line-height: 0;
        border-radius: 50%;
    }
`