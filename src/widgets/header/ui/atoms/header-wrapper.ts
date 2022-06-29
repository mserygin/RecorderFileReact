import styled from 'styled-components'

const HeaderWrapper = styled.header`
    width: 100%;
    height: 70px;
    background: var(--theme);
    box-shadow: var(--light-box-shadow);
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 20px;

    & > .buttons {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 10px;
        }
    }

    .header-button-and-title {
        display: flex;
        align-items: center;

        button {
            margin-right: 8px;
        }

        h3 {
            color: var(--text);
        }
    }

    @media (max-width: 1000px) {
        padding: 0 10px;
    }
`

export default HeaderWrapper
