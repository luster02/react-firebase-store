import React from 'react'
import { PhotoCard, PhotoCardSkeleton } from '../PhotoCard'
import { List } from './styles'
import { useCollection } from '../../hooks/useFirebase'

export const ListPhotos = () => {
    const { data, loading } = useCollection('products', 'name', 'asc')

    return (
        <List>
            {loading
                ? <PhotoCardSkeleton />
                : data.map(photo => <PhotoCard key={photo.id} {...photo} />)
            }
        </List>
    )
}