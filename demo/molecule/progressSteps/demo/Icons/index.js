import React from 'react'

const FillCheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="a"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm-1.85 14.13a2.57 2.57 0 0 1-1.82-.75L6 13a.75.75 0 0 1 1-1l2.36 2.36c.42.417 1.1.417 1.52 0l5.56-5.56a.75.75 0 0 1 1.06 1.06L12 15.38a2.57 2.57 0 0 1-1.85.75z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#666" fillRule="nonzero" xlinkHref="#a" />
      <g fill="#999" mask="url(#b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
)

FillCheckIcon.displayName = 'FillCheckIcon'

const FillEditPaper = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="a"
        d="M20.984 3.448l-.413 1.965-4.095-.83.41-1.965a.789.789 0 0 1 .93-.602l2.557.52a.771.771 0 0 1 .61.912zM7.346 5.178h3.26c.449 0 .814.358.814.8a.808.808 0 0 1-.815.802h-3.26a.808.808 0 0 1-.814-.801c0-.443.365-.802.815-.802zm6.106 14.778a.779.779 0 0 1-.114-.59l2.464-11.743 4.161.844-2.465 11.744a.783.783 0 0 1-.342.497l-1.898 1.227a.406.406 0 0 1-.557-.114l-1.249-1.865zm-2.242-1.02a2.863 2.863 0 0 0 .427 2.195l.224.335H5.716C4.218 21.466 3 20.268 3 18.796V4.91c0-1.472 1.218-2.67 2.716-2.67h9.032l-1.64 7.744H7.345a.808.808 0 0 0-.815.8c0 .443.365.802.815.802h5.421l-.792 3.738h-4.63a.808.808 0 0 0-.814.801c0 .443.365.801.815.801h4.289l-.425 2.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#666" xlinkHref="#a" />
      <g fill="#999" mask="url(#b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
)

FillEditPaper.displayName = 'FillEditPaper'

const LineUserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="a"
        d="M12 13.75c-2.11 0-8.25 1.17-8.25 4.75v1a1.72 1.72 0 0 0 1.68 1.75h13.13a1.72 1.72 0 0 0 1.69-1.75v-1c0-3.59-6.14-4.75-8.25-4.75zm6.75 5.75c0 .13-.08.25-.19.25H5.43c-.1 0-.18-.11-.18-.25v-1c0-2 4.43-3.25 6.75-3.25 2.32 0 6.75 1.27 6.75 3.25v1zm-7.25-7.25a3.75 3.75 0 0 1-3.75-3.76v-2a3.75 3.75 0 0 1 3.75-3.74h1a3.75 3.75 0 0 1 3.75 3.75v2a3.75 3.75 0 0 1-3.75 3.75h-1zM9.25 6.49V8.5a2.25 2.25 0 0 0 2.25 2.25h1a2.25 2.25 0 0 0 2.25-2.25v-2a2.25 2.25 0 0 0-2.25-2.25h-1a2.25 2.25 0 0 0-2.25 2.24z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#666" fillRule="nonzero" xlinkHref="#a" />
      <g fill="#999" mask="url(#b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
)

LineUserIcon.displayName = 'LineUserIcon'

export {FillCheckIcon, FillEditPaper, LineUserIcon}
