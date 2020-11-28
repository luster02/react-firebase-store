import React from 'react'
import { Anchor, Image, AnchorSkeleton } from './styles'
// import { useCategory } from '../../context/CategoryContext'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, id = 1, name = '?' }) => {
    // const { setCategoryId } = useCategory()

    return (
        <Anchor >
            <Image src={cover} alt="cover" />
            {name}
        </Anchor>
    )
}

export const CategorySkeleton = () => <AnchorSkeleton />
