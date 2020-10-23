import React from 'react'
import AtomTag, {atomTagSizes} from '../../../../components/atom/tag/src'

const CloseIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z" />
  </svg>
)

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17.25 2.83V2.5a.75.75 0 1 0-1.5 0v.25h-7.5V2.5a.75.75 0 0 0-1.5 0v.33a4.73 4.73 0 0 0-4 4.67v9a4.76 4.76 0 0 0 4.75 4.75h9a4.76 4.76 0 0 0 4.75-4.75v-9a4.73 4.73 0 0 0-4-4.67zm2.5 6.42v7.25a3.25 3.25 0 0 1-3.25 3.25h-9a3.25 3.25 0 0 1-3.25-3.25V9.25h15.5zm0-1.75v.25H4.25V7.5A3.25 3.25 0 0 1 7.5 4.25h9a3.25 3.25 0 0 1 3.25 3.25zM14.5 18.25a2.75 2.75 0 0 1-2.75-2.75v-1a2.75 2.75 0 0 1 2.75-2.75h1a2.75 2.75 0 0 1 2.75 2.75v1a2.75 2.75 0 0 1-2.75 2.75h-1zm-1.25-3.75v1a1.25 1.25 0 0 0 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25h-1c-.69 0-1.25.56-1.25 1.25z" />
  </svg>
)

export default () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1 className="sui-Studio-h1">Tag</h1>
      <p className="sui-Studio-h4">Lorem ipsum dolor sit amet...</p>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Size</h2>
        <p className="sui-Studio-p">
          There are three options for{' '}
          <code className="sui-Studio-code">size</code>
        </p>
        <div>
          <p className="sui-Studio-label">Small</p>
          <AtomTag label="Small Tag" size={atomTagSizes.SMALL} />
        </div>
        <div>
          <p className="sui-Studio-label">Medium (default)</p>
          <AtomTag label="Medium Tag" size={atomTagSizes.MEDIUM} />
        </div>
        <div>
          <p className="sui-Studio-label">Large</p>
          <AtomTag label="Large Tag" size={atomTagSizes.LARGE} />
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Types</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">type</code> in order to
          color it as desired from a high order component.
        </p>
        <div>
          <AtomTag label="Sale" type="warning" />
          <AtomTag label="Special" type="special" />
          <AtomTag label="5 min ago" type="date" />
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Actionable</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">type</code> in order to
          color it as desired from a high order component.
        </p>
        <div>
          <AtomTag
            label="Navigation Tag"
            onClick={() => window.alert('click!')}
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            label="Anchor Tag"
            target="_blank"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
            target="_blank"
          />
        </div>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Icons</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">icon</code>.
        </p>
        <div>
          <AtomTag
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
        </div>

        <p>
          Only actionable tags can have{' '}
          <code className="sui-Studio-code">iconPlacement="right"</code>
        </p>
      </div>

      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Responsive</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">responsive</code> true for
          make responsive layout. keep large size in mobile.
        </p>
        <div>
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
            size={atomTagSizes.SMALL}
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            responsive
            target="_blank"
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
            size={atomTagSizes.LARGE}
          />
        </div>
      </div>
    </div>
  </div>
)
