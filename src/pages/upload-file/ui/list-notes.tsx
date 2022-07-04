import React, { FC } from "react";
import styled from "styled-components";

type PropType = {
    listNotes: Array<{
        name: string,
        listProblemsPage: Array<number>
    }>
}

const ListNotesWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListNotes: FC<PropType> = ({listNotes}) => {
    return (
        <ListNotesWrapper>
            {
                listNotes.map((itemNote) => (
                    <p>{itemNote.name} : <strong>{itemNote.listProblemsPage.join()}</strong>  Страница</p>
                ))
            }
        </ListNotesWrapper>
    )
}

export default ListNotes
