import styled from "styled-components";

export const IntroContainer = styled.div`
   height: 34rem;
   display: flex;
   align-items: center;
   justify-content: space-between;

   &>div {
    width: 36.75rem;

        h1 {
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 800;
            font-size: 3rem;
            line-height: 130%;
            margin-bottom: 1rem;
            color: ${(props) => props.theme['base-title']};
        }
        
        p {
            font-size: 1.25rem;
            color: ${(props) => props.theme['base-subtitle']};
        }

        & > div:last-of-type{
            margin-top: 5.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1.25rem 2.5rem;
        }
   }
`

const ITEM_COLOR = {
    purple: 'purple',
    gray: 'base-text',
    orange: 'yellow-dark',
    yellow: 'yellow'
} as const;

interface ItemProps {
    itemColor: keyof typeof ITEM_COLOR;
}

export const Item = styled.p<ItemProps>`
    font-size: 1rem !important; 
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