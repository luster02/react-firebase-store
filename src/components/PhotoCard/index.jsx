import React, { Fragment } from 'react'
import { Img, ImgWrapper, Article, ArticleSkeleton } from './styles'
import { LikeButton } from '../CardFooter'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://res.cloudinary.com/dbytfycuy/image/upload/v1606430601/pexels-mica-asato-1082528_yqzy4n.jpg"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen()

    return (
        <Article ref={element}>
            {
                show && <Fragment>
                    {/* <Link to={`/detail/${id}`}> */}
                    <ImgWrapper>
                        <Img src={src} alt="detail" />
                    </ImgWrapper>
                    {/* </Link> */}

                    <LikeButton likes={likes} id={id} />
                </Fragment>
            }
        </Article>
    )
}

export const PhotoCardSkeleton = () => (
    <ArticleSkeleton />
)