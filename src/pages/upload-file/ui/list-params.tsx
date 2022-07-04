import React, { FC } from "react";

type PropType = {
    listParams: {
        [key: string]: string | number
    }
}

const ListParams: FC<PropType> = ({listParams}) => {
    return (
        Object.keys(listParams).map((itemParam) => (
            <p>{itemParam} : <strong>{listParams[itemParam]}</strong></p>
        ))
    )
}

export default ListParams
