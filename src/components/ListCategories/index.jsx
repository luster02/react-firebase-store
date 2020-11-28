import React, { Fragment, useEffect, useState } from 'react'
import { Skeleton } from './Skeleton'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useCollection } from '../../hooks/useFirebase'

export const ListCategories = () => {
    const { data, loading } = useCollection('categories', "order", "asc")
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = fixed => (
        <List fixed={fixed}>
            {loading
                ? <Skeleton />
                : data.map(category => (
                    <Item key={category.id}>
                        <Category {...category} id={category.id} />
                    </Item>
                ))
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}