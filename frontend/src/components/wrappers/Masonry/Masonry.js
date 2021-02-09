import Masonry from 'react-masonry-css'
import classes from './Masonry.module.scss'

import React from 'react'

const MasonryGrid = ({children}) => {
    return (
        <Masonry
            breakpointCols={3}
            className={classes.grid}
            columnClassName={classes.gridColumn}>
            {children}
        </Masonry>
    )
}

export default MasonryGrid