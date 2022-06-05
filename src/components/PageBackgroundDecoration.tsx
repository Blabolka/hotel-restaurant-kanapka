import React from 'react'

import topLeft from '@assets/img/background-element-top-left.svg'
import bottomLeft from '@assets/img/background-element-bottom-left.svg'
import bottomRight from '@assets/img/background-element-bottom-right.svg'

const PageBackgroundDecoration = () => {
    return (
        <div className="page-background-decoration">
            <img className="page-background-decoration__top-left" src={topLeft} alt="Page Decoration Top Left" />
            <img
                className="page-background-decoration__bottom-left"
                src={bottomLeft}
                alt="Page Decoration Bottom Left"
            />
            <img
                className="page-background-decoration__bottom-right"
                src={bottomRight}
                alt="Page Decoration Bottom Right"
            />
        </div>
    )
}

export default PageBackgroundDecoration
