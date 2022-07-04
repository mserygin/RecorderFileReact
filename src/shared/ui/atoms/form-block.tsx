import styled from 'styled-components'

const FormBlockWrapper = styled.div<{ maxWidth?: string, maxHeight?: string }>`
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth ?? '600px'};
    padding: 20px;
    border-radius: var(--brSemi);
    background: var(--form);
    box-shadow: var(--very-mild-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0;
        background: transparent;
    }
`

export default FormBlockWrapper
