import React, { memo, useMemo } from 'react'
import { useSpring, animated } from 'react-spring'
import { useTheme, useMotionConfig } from '@nivo/core'

export const CrosshairLine = memo(({ x0, x1, y0, y1 }) => {
    const theme = useTheme()
    const { animate, config: springConfig } = useMotionConfig()
    const style = useMemo(
        () => ({
            ...theme.crosshair.line,
            pointerEvents: 'none',
        }),
        [theme.crosshair.line]
    )

    const animatedProps = useSpring({
        x1: x0,
        x2: x1,
        y1: y0,
        y2: y1,
        config: springConfig,
        immediate: !animate,
    })

    return <animated.line {...animatedProps} fill="none" style={style} />
})

/*
CrosshairLine.displayName = 'CrosshairLine'
CrosshairLine.propTypes = {
    x0: PropTypes.number.isRequired,
    x1: PropTypes.number.isRequired,
    y0: PropTypes.number.isRequired,
    y1: PropTypes.number.isRequired,
}

export default CrosshairLine
*/