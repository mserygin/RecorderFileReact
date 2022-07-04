import localizeDate from '@shared/lib/localize-date'
import { ColumnType } from '../types'

const displayWithType = (value: string, type?: ColumnType) => {
    switch (type) {
        case 'date':
            return localizeDate(value, 'numeric')
        case 'rub':
            return value + ' руб.'
        default:
            return value
    }
}

export default displayWithType
