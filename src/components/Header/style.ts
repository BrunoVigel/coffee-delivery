import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color:${(props) => props.theme['purple-dark']};
            padding: 0.5rem;
            background: ${(props) => props.theme['purple-light']};
            border-radius: 6px;
        }

        a {
            padding: 0.5rem;
            background: ${(props) => props.theme['yellow-light']};
            border-radius:0.75rem;
            line-height: 0;

            svg {
                line-height: 0;
            }
        }
    }
`