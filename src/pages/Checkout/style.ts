import styled from "styled-components";

export const CheckoutContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
`

export const OrderFormContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 44px;
    background: ${(props) => props.theme['base-card']};

    b {
        margin-bottom: 2.375rem;
        font-size: 1.125rem;
    }
`

export const CoffeeCardContainer = styled.div`
    width: 27.75rem;
    padding: 2.5rem;
    border-radius: 6px 44px;
    background: ${(props) => props.theme['base-card']};

    b {
        margin-bottom: 2.375rem;
        font-size: 1.125rem;
    }
`

export const Item = styled.div`
    padding: 0.5rem 0.25rem;
    display: flex;
    justify-content: space-between;
`

export const ItemInfo = styled.div`
    display: flex;
    gap: 1.25rem;

    p {
        color: ${(props) => props.theme['base-subtitle']}
    }

    img {
        max-height: 4rem;
        max-width: 4rem;
    }

`

export const ItemButtons = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        
        span {
            font-size: 1rem;
        }

        button {
            color: ${(props) => props.theme['purple']}
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: .5rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']}
    }
`

export const TotalItemsInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 0.75rem;

    div {
        padding:0;
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;

        &:last-of-type {
            font-size: 1.25rem;
        }
    }
`

export const SubmitButton = styled.button `
    width: 100%;
    margin-top: 1.5rem;
    background: ${(props) => props.theme['yellow']};
    padding: 0.75rem 0;
    color: ${(props) => props.theme['white']};
    border-radius: 6px;
    transition: .2s;

    &:hover {
        background: ${(props) => props.theme['yellow-dark']}
    }
`

export const Divider = styled.span`
    margin: 1.5rem 0;
    height: 1px;
    background: ${(props) => props.theme['base-button']};
    display: block;
`