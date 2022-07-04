import styled from 'styled-components'

const SelectHeaderWrapper = styled.div<{ multiple: boolean; appearance: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;

    padding: ${({ multiple }) => (multiple ? '5px 10px 5px 5px' : '5px 10px')};
    box-shadow: ${({ appearance }) => appearance && 'var(--files-shadow)'};
    position: relative;
    background: var(--files);
    border-radius: var(--brLight);
    overflow: hidden;

    &:hover {
        filter: brightness(0.95);
    }
`

export default SelectHeaderWrapper
