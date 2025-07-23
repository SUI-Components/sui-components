import PropTypes from 'prop-types'

const Bauhaus = ({style, className, ...props}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--studio-c-on-surface)',
        ...style
      }}
      {...props}
    >
      <svg
        viewBox="0 0 480 160"
        version="1.1"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{background: 'var(--studio-c-surface)', width: '100%', height: '100%'}}
      >
        <defs>
          <clipPath id="square">
            <rect width="20" height="20" />
          </clipPath>
        </defs>
        <rect x="0" y="0" width="480" height="160" style={{fill: 'var(--studio-c-on-surface)'}} />
        <g transform="matrix(1,0,0,1,0,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="0"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="0"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,0)" style={{clipPath: 'url(#square)'}}>
          undefined
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,0)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,0)" style={{clipPath: 'url(#square)'}}>
          undefined
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,0)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,0)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,0)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="0"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,0)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,0)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,20)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="0"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>

        <g transform="matrix(1,0,0,1,440,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,20)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,40)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>

        <g transform="matrix(1,0,0,1,280,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,40)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,40)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,40)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,40)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,60)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,60)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,60)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,60)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,60)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,60)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,60)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,60)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,60)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,80)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,80)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,80)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,80)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,80)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="5"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="5"
            height="10"
            x="10"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,80)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,80)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="0"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,80)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="5"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="5"
            height="10"
            x="10"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="0"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="0"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,100)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,100)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,100)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,120)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,120)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,120)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="0"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,120)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,120)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="0"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,120)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <polygon
            points="10,5 5,10 10,15 15,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,120)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,120)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,120)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            x="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,120)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,120)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,120)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,0,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="5"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="5"
            height="10"
            x="10"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,20,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="5"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="5"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="5"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="15"
            cy="15"
            r="2.5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,40,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,60,140)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,80,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,100,140)" style={{clipPath: 'url(#square)'}}>
          <polygon
            points="10,0 0,10 10,20 20,10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,120,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,140,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,160,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,180,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,200,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,220,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="0"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,240,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <rect
            x="5"
            y="5"
            width="10"
            height="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="5"
            x="5"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,260,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="10"
            height="10"
            x="10"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,280,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,300,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="10"
            cy="0"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
          <circle
            cx="10"
            cy="20"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,320,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,340,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="10"
            x="5"
            y="5"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,360,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 80%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,380,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="0"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <circle
            cx="20"
            cy="10"
            r="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,400,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            width="20"
            height="20"
            x="0"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,420,140)" style={{clipPath: 'url(#square)'}}>
          <circle
            cx="20"
            cy="20"
            r="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 90%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,440,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="10"
            height="20"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="10"
            height="20"
            x="10"
            y="0"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
        <g transform="matrix(1,0,0,1,460,140)" style={{clipPath: 'url(#square)'}}>
          <rect
            x="0"
            y="0"
            width="20"
            height="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
          <rect
            width="20"
            height="10"
            x="0"
            y="10"
            style={{fill: 'color-mix(in srgb, var(--studio-c-on-surface) 70%, var(--studio-c-surface))'}}
          />
        </g>
      </svg>
    </div>
  )
}

Bauhaus.displayName = 'Bauhaus'

Bauhaus.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Bauhaus
