const IconCloseTag = () => (
  <svg viewBox="0 0 24 24">
    <path
      id="a"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const IconArrowDown = () => (
  <svg>
    <defs>
      <path
        id="a"
        d="M14.5 18.5a1 1 0 0 1-.71-.29l-4.08-4.08a3 3 0 0 1 0-4.24l4.09-4.1a1 1 0 0 1 1.41 1.41l-4.09 4.1a1 1 0 0 0 0 1.41l4.08 4.08a1 1 0 0 1-.71 1.71h.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="#666" fillRule="nonzero" transform="matrix(0 -1 -1 0 24.189 24.189)" xlinkHref="#a" />
    </g>
  </svg>
)

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <path d="m20.21 18.79-5.11-5.11a7 7 0 1 0-1.41 1.41l5.11 5.11a1 1 0 0 0 1.41-1.41zM4.5 9.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0z" />
  </svg>
)

const IconClock = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8c2.1 0 4.2.8 5.7 2.3C19.2 7.8 20 9.9 20 12c0 4.4-3.6 8-8 8zm0-18C6.5 2 2 6.5 2 12c0 2.7 1.1 5.2 2.9 7.1S9.3 22 12 22s5.2-1.1 7.1-2.9S22 14.7 22 12s-1.1-5.2-2.9-7.1S14.7 2 12 2zm3 11.9c.5.3.6.9.3 1.4-.3.5-.9.6-1.4.3L11 14c-.3-.2-.5-.5-.5-.8v-6c0-.6.4-1 1-1s1 .4 1 1v5.4l2.5 1.3z" />
  </svg>
)

export {IconCloseTag, IconArrowDown, IconClock, IconSearch}
