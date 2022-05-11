import styled from 'styled-components'

export const Container = styled.div`
    height: 3.75rem;
    max-width: 106.25rem;
    width: 100%;
    margin: 2rem auto 0 auto;
    display: flex;

    input {
        flex: 1;
        border-radius: 1.875rem 0 0 1.875rem;
        border: solid 2px #1D307B;
        font-size: 1.875rem;
        padding: 0 2.625rem;
    }

    button {
        width: 25.375rem;
        border: none;
        border-radius: 0 1.875rem 1.875rem 0;
        background-color: #1D307B;
        color: #fff;
        font-size: 1.875rem;
    }
`