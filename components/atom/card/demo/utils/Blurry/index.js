import PropTypes from 'prop-types'

const Blurry = ({style, ...props}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 450" opacity="0.96">
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="54"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            />
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="132"
            ry="165"
            cx="613.1003196022727"
            cy="107.46336780894889"
            fill="color-mix(in srgb, hsl(37, 99%, 67%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="267.1781089089134"
            cy="145.9769869717685"
            fill="color-mix(in srgb, hsl(316, 73%, 52%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="664.3866743607956"
            cy="457.3182317560369"
            fill="color-mix(in srgb, hsl(185, 100%, 57%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="81.77600097656244"
            cy="333.98751137473363"
            fill="color-mix(in srgb, hsl(353, 98%, 41%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="7.465924349698184"
            cy="100.06917225230823"
            fill="color-mix(in srgb, hsl(148, 41%, 43%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="305.0862204811789"
            cy="412.05700961026275"
            fill="color-mix(in srgb, hsl(55, 94%, 54%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="458.52398681640625"
            cy="227.43214416503906"
            fill="color-mix(in srgb, hsl(272, 99%, 54%) 60%, var(--studio-c-surface))"
          />
          <ellipse
            rx="132"
            ry="165"
            cx="726.7108709161932"
            cy="211.3760570179332"
            fill="color-mix(in srgb, hsl(11, 100%, 65%) 60%, var(--studio-c-surface))"
          />
        </g>
      </svg>
    </div>
  )
}

Blurry.displayName = 'Blurry'

Blurry.propTypes = {
  style: PropTypes.object
}

export default Blurry
