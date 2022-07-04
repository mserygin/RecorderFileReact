import { FilterElementList } from '@shared/ui/added-elements-list'
import { useEffect, useState } from 'react'

const useFilterList = (listKeys: string[], setList: React.Dispatch<React.SetStateAction<FilterElementList>>) => {
    const [removeAll, setRemoveAll] = useState(false)
    const [removeOne, setRemoveOne] = useState<string | null>(null)

    useEffect(() => {
        if (removeAll) {
            setTimeout(() => {
                setRemoveAll(false)
                setList(null)
            }, 200)
        }
    }, [removeAll])

    useEffect(() => {
        setTimeout(() => {
            if (removeOne !== null) {
                setRemoveOne(null)
                setList((prev) => {
                    if (prev) delete prev[removeOne]

                    return { ...prev }
                })
            }
        }, 500)
    }, [removeOne])

    return { removeAll, removeOne, setRemoveAll, setRemoveOne }
}

export default useFilterList
