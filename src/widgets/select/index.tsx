import { Title } from '@shared/ui/atoms'
import React from 'react'
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useSelect, { SelectProps } from './lib/hooks/use-select'
import { SelectArrow, SelectHeader, SelectHeaderWrapper, SelectItem, SelectItems, SelectWrapper } from './ui/atoms'

export interface SelectPage {
    id: string | number
    icon?: React.ReactNode
    title: string
    children?: SelectPage[]
}

const Select = (props: SelectProps) => {
    const {
        handleOpen,
        refElement,
        isOpen,
        multiple,
        handleSelect,
        selectedRoute,
        currentItems,
        route,
        goBack,
        refItems,
        appearance,
    } = useSelect(props)
    const { isActive, width, title, required, selected, placeholder } = props

    return (
        <SelectWrapper
            onClick={handleOpen}
            appearance={appearance}
            ref={refElement}
            isOpen={isOpen}
            isActive={isActive ?? true}
            width={width}
        >
            <Title size={5} align="left" bottomGap="5px" visible={!!title} required={required}>
                {title}
            </Title>
            <SelectHeaderWrapper multiple={multiple} appearance={appearance}>
                <SelectHeader appearance={appearance}>
                    {!multiple ? (
                        <div className="single-header">
                            {!!selected ? (
                                <>
                                    {!!selected.icon && (
                                        <span className="icon">{selected.icon}</span>
                                    )}
                                    <span className="header-title">{selected .title}</span>
                                </>
                            ) : (
                                <span className="not-chosen">{placeholder ?? 'Не выбрано'}</span>
                            )}
                        </div>
                    ) : !!selected ? (
                        (selected).map((page) => {
                            return (
                                <div className="header-item" key={page.id}>
                                    {!!page.icon && <span className="icon">{page.icon}</span>}
                                    <span className="header-title">{page.title}</span>
                                </div>
                            )
                        })
                    ) : (
                        <span className="not-chosen multi">{placeholder ?? 'Не выбрано'}</span>
                    )}
                </SelectHeader>
                <SelectArrow isOpen={isOpen} />
            </SelectHeaderWrapper>
            <SelectItems
                width={width}
                ref={refItems}
                isOpen={isOpen}
                className={isOpen ? 'open' : 'close'}
                itemsAmount={currentItems.length + (!!route.length ? 1 : 0)}
                title={title}
            >
                {!!route.length && (
                    <SelectItem
                        key={-1}
                        isSelected={false}
                        onClick={(e) => {
                            e.stopPropagation()
                            goBack()
                        }}
                    >
                        <span className="back-button">
                            <FiChevronLeft />
                            Назад
                        </span>
                    </SelectItem>
                )}
                {currentItems.map(({ id, icon, title, children }) => (
                    <SelectItem
                        key={title}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleSelect({ id, icon, title, children })
                        }}
                        isSelected={!multiple && !!selected && selected.title.includes(title)}
                        leadingToSelected={selectedRoute.includes(id.toString())}
                    >
                        {!!icon && <span className="icon">{icon}</span>}
                        <span className="select-item-title">{title}</span>
                        {!!children && (
                            <span className="right-icon">
                                <FiChevronRight />
                            </span>
                        )}
                        {multiple &&
                            !!selected &&
                            !!selected.find((page) => page.title.includes(title)) && (
                                <span className="right-icon">
                                    <FiCheck />
                                </span>
                            )}
                    </SelectItem>
                ))}
            </SelectItems>
        </SelectWrapper>
    )
}

export default Select
