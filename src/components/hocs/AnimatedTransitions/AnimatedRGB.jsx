import React from 'react'
import PropTypes from 'prop-types'

export let AnimatedRGB = (WrappedComponent, styles) => {
    const { bgColor } = styles;

        return (props)=> {
            return (
                <div
                style={{
                    ...styles.fill,
                    ...styles.rgb,
                    background: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`
                }}
                >
                    <WrappedComponent {...props} styles={styles} />
                </div>
            );
        }
}