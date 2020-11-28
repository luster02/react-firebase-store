import React from "react"
import { useLocation } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { Svg, Icon, Col } from './styles'

export function Logo(props) {
    const { pathname } = useLocation()
    return (
        <Col>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 477 90"
                className="prefix__iconLeft"
                {...props}
            >
                <path d="M130.17 58.635h7.631c1.515 0 2.75-1.179 2.75-2.693 0-.393-.057-.674-.225-1.01l-3.872-9.427c-.56-1.234-2.02-1.851-3.422-1.346-1.29.505-1.908 2.076-1.46 3.422l2.357 5.78h-3.759a2.574 2.574 0 00-2.58 2.58c0 1.515 1.177 2.694 2.58 2.694zm-3.815 13.578l1.29-3.03h12.737l1.29 3.03c.506 1.403 2.077 1.964 3.423 1.515 1.347-.617 1.908-2.132 1.403-3.479l-1.852-4.544c-.336-1.01-1.346-1.908-2.525-1.908H125.85c-.954 0-1.964.73-2.413 1.683l-1.908 4.77c-.56 1.346.112 2.861 1.403 3.478 1.459.45 2.918-.168 3.423-1.515zm-11.278 0l18.965-47.693 18.909 47.693c.56 1.347 2.132 1.964 3.478 1.515 1.347-.617 1.964-2.132 1.403-3.479l-21.378-53.584c-.224-.617-.673-1.235-1.458-1.459-1.291-.561-2.862.056-3.423 1.459l-21.434 53.584c-.449 1.347.224 2.862 1.515 3.48 1.347.448 2.805-.17 3.423-1.516zm56.053-.449V19.19c0-1.403-1.122-2.525-2.637-2.525-1.403 0-2.581 1.122-2.581 2.525v52.574c0 1.403 1.178 2.638 2.58 2.638a2.634 2.634 0 002.638-2.638zm42.868 0V19.19c0-1.403-1.179-2.525-2.694-2.525-1.402 0-2.58 1.122-2.58 2.525v52.574c0 1.403 1.178 2.638 2.58 2.638 1.515 0 2.694-1.235 2.694-2.638zm-9.988-1.515l-22.836-32.655c-.786-1.29-2.525-1.571-3.647-.617-.786.448-1.067 1.234-1.067 2.076v32.711c0 1.403 1.067 2.581 2.525 2.581 1.46 0 2.638-1.178 2.638-2.58V47.412l18.067 25.81c.898 1.179 2.469 1.515 3.703.73 1.122-.954 1.403-2.525.617-3.704zM175.9 20.761l22.78 32.712c.841 1.178 2.413 1.459 3.59.617a2.577 2.577 0 001.18-2.188V19.19c0-1.403-1.18-2.525-2.582-2.525-1.403 0-2.637 1.122-2.637 2.525v24.464l-18.067-25.867c-.786-1.178-2.47-1.571-3.647-.617-1.179.785-1.46 2.356-.618 3.59zm94.039 47.917V45.45c0-3.479-5.274-3.479-5.274 0v21.658c-15.15 7.463-34.957-1.402-35.293-21.21-.28-18.74 17.17-29.064 35.63-23.06 3.646 1.234 5.33-3.816 1.57-4.994-21.995-7.07-42.811 5.78-42.418 28.167.392 23.847 24.744 35.798 44.382 24.969.842-.505 1.403-1.347 1.403-2.3zm-4.152-39.95c-3.535-1.515-7.575-2.244-12.176-2.076-24.913.898-23.847 37.538.056 37.538 1.964 0 5.555-.056 5.555-2.862V45.449c0-3.479-5.33-3.479-5.33 0v13.41c-17.507.169-18.068-26.315-.169-26.988 3.816-.113 7.07.448 9.932 1.683 3.142 1.346 5.274-3.367 2.132-4.826zm26.932 24.015c0 15.318 22.669 15.318 22.669 0v-33.61c0-1.514-1.179-2.693-2.581-2.693-1.572 0-2.638 1.179-2.638 2.694v33.61c0 8.303-12.175 8.303-12.175 0v-33.61a2.659 2.659 0 00-2.694-2.694c-1.402 0-2.58 1.179-2.58 2.694zm33.385.617V19.134c0-1.515-1.178-2.694-2.58-2.694-1.516 0-2.638 1.179-2.638 2.694V53.36c0 21.995-33.665 21.995-33.665 0V19.134a2.659 2.659 0 00-2.694-2.694c-1.402 0-2.58 1.179-2.58 2.694V53.36c0 28.785 44.157 28.84 44.157 0zm45.617 15.711H343.78V19.19c0-1.403-1.178-2.581-2.581-2.581-1.515 0-2.693 1.178-2.693 2.58v52.575c0 1.403 1.178 2.581 2.693 2.581h30.523c1.515 0 2.582-1.178 2.582-2.58 0-1.516-1.067-2.694-2.582-2.694zM349.053 19.19v42.026c0 1.403 1.179 2.58 2.581 2.58h20.087c1.515 0 2.582-1.177 2.582-2.58 0-1.459-1.067-2.637-2.582-2.637h-17.45v-39.39c0-1.402-1.178-2.58-2.637-2.58-1.402 0-2.58 1.178-2.58 2.58zm50.106 39.445h7.63c1.46 0 2.75-1.179 2.75-2.693 0-.393-.112-.674-.28-1.01l-3.816-9.427c-.56-1.234-2.076-1.851-3.478-1.346-1.235.505-1.852 2.076-1.403 3.422l2.356 5.78h-3.759a2.574 2.574 0 00-2.581 2.58c0 1.515 1.178 2.694 2.581 2.694zm-3.872 13.578l1.347-3.03h12.737l1.234 3.03c.561 1.403 2.133 1.964 3.48 1.515 1.346-.617 1.85-2.132 1.402-3.479l-1.908-4.544c-.28-1.01-1.29-1.908-2.469-1.908H394.84c-.954 0-1.964.73-2.47 1.683l-1.85 4.77c-.562 1.346.055 2.861 1.402 3.478 1.403.45 2.918-.168 3.366-1.515zm-11.221 0l18.908-47.693 18.965 47.693c.562 1.347 2.133 1.964 3.423 1.515a2.757 2.757 0 001.459-3.479l-21.378-53.584c-.224-.617-.73-1.235-1.515-1.459-1.234-.561-2.805.056-3.366 1.459l-21.434 53.584c-.505 1.347.224 2.862 1.459 3.48a2.84 2.84 0 003.479-1.516zm73.279-29.345c4.32 0 7.967-3.423 7.967-7.8 0-3.983-3.142-8.023-7.967-8.023h-9.315c-3.478 0-3.478 5.274 0 5.274h9.315c1.515 0 2.749 1.123 2.749 2.694 0 3.03-2.918 2.637-5.33 2.637-4.265 0-4.096 4.937 0 5.218.841.056 1.907 0 2.58 0zm4.881 27.325L450.22 52.968c-1.515-1.964-4.826-1.179-4.826 1.683v17.113c0 3.423 5.275 3.423 5.275 0v-8.977l7.238 10.436c2.02 2.862 6.284-.224 4.32-3.03zm-22.05 1.571v-49.88h18.066c3.535 0 6.733 1.402 9.09 3.758 8.08 8.192 2.413 22.444-9.09 22.444-1.963 0-3.535 2.3-1.963 4.32l14.532 20.817c1.851 2.862 6.172-.224 4.208-3.03l-12.176-17.45c3.142-.785 6.004-2.525 8.248-4.769 11.335-11.67 3.255-31.365-12.849-31.365h-20.704c-1.403 0-2.637 1.178-2.637 2.58v52.575c0 3.423 5.274 3.423 5.274 0zM26.387 24.398h39.215v39.215L90 88.012V0H1.988zm37.226 41.204H24.398V26.387L0 1.988V90h88.012z" />
            </Svg>
            {pathname === '/' && < Icon >
                <MdShoppingCart size="32px" />
            </Icon>}
        </Col >
    )
}