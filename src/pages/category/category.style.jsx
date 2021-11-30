import styled from "styled-components";

export const CollectionPage = styled.div`
    display: flex;
    flex-direction: column;
`

export const CollectionItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    & > div {
        margin-bottom: 30px;
    }
`

export const CollectionTitle = styled.h1`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`