import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListPhotos } from '../components/ListPhotos'

export function Home() {
    return (
        <div>
            <ListCategories />
            <ListPhotos />
        </div>
    )
}