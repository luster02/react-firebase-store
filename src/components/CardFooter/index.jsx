import React from 'react'
import { MdShoppingBasket, MdBookmarkBorder } from "react-icons/md";
import { Button, Col, Price } from './styles'

export const LikeButton = () => {

    return (
        <Col>
            <Button>
                <MdBookmarkBorder size="32px" />
            </Button>
            <Price>
                $180
            </Price>
            <Button>
                <MdShoppingBasket size="32px" />
            </Button>
        </Col>
    )
}