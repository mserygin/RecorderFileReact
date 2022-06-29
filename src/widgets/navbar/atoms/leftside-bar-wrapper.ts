import styled from 'styled-components'

const LeftsideBarWrapper = styled.div<{ height: number }>`
    min-width: 264px;
    width: 264px;
    height: ${({ height }) => height + 'px'};
    box-shadow: var(--light-box-shadow);
    background: var(--theme);
    z-index: 4;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    transition: 0.2s transform, width 0.3s, 0.2s;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    .top-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        align-items: center;
        max-height: 100%;
    }

    @media (max-width: 1000px) {
        transition: 0.2s left, 0.2s opacity;
        position: absolute;
        width: 100%;
        font-size: 0.9em;

        .top-wrapper {
            max-height: calc(100% - 60px);

            img {
                width: 200px;
            }
        }
    }
`

export default LeftsideBarWrapper
