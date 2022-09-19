import styled from "styled-components";

export const CoffeeListContainer = styled.div`

`

export const Title = styled.p`
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
`

export const ItemList = styled.div`
   display: flex;
   gap:2.5rem  2rem;
   flex-wrap: wrap;
`

export const Item = styled.div`
   border-radius: 6px 36px;
   background: ${(props) => props.theme['base-card']};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 256px;

   img {
    max-width: 120px;
    position: relative;
    top: -20px;
   }
`

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1.25rem;

    p:first-of-type {
        color: ${(props) => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
        font-size: 1.25rem;
    }

    p:last-of-type {
        color: ${(props) => props.theme['base-label']};
        font-size:0.875rem;
    }
`

export const ItemTags = styled.div `
    margin: 0.75rem 0 1rem 0;
    display: flex;
    gap: 0.25rem;

    p {
        color: ${(props) => props.theme['yellow-dark']};
        background: ${(props) => props.theme['yellow-light']};
        padding: 0.25rem 0.5rem;
        border-radius: 100rem;
        font-size:0.625rem;
    }
`

export const BuyContainer = styled.div`
    padding: 2.0625rem 0 1.25rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &>p {
        font-family: 'Baloo 2';
        font-weight: bold;
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-text']};
        padding-right: 1.4375rem;

        span {
            font-family: 'Roboto';
            font-weight:normal;
            font-size: 0.875rem;
        }
    }
`

export const BuyButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        padding: 0.5rem;
        
        span {
            font-size: 1rem;
        }

        &>button {
            display: flex;
            align-items: center;
        }
    }

    &>button {
        background: ${(props) => props.theme['purple-dark']};
        padding: 0.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
    }
`