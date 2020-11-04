import React from 'react'
import LayoutGrid, {
  LayoutGridItem
} from '../../../../components/layout/grid/src'

export default () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1 className="sui-Studio-h1">Grid</h1>
      <p className="sui-Studio-h4">
        We use tags to visually emphasise features of the UI and make
        recognition and interaction easier.
      </p>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Size</h2>
        <p className="sui-Studio-p">
          Tags structure can have 3 main sizes: Small, medium{' '}
          <small>(default)</small> and large. You can use this prop{' '}
          <code className="sui-Studio-code">size</code> to modify it.
        </p>
        <div>
          <LayoutGrid>
            <LayoutGridItem sm={3}>
              <div className="box">
                sm: 6<br />
                md: 3<br />
                lg: 10
              </div>
            </LayoutGridItem>
            <LayoutGridItem sm={3}>
              <div className="box">
                sm: 6<br />
                md: 3<br />
                lg: 10
              </div>
            </LayoutGridItem>
            <LayoutGridItem sm={3}>
              <div className="box">
                sm: 6<br />
                md: 3<br />
                lg: 10
              </div>
            </LayoutGridItem>
            <LayoutGridItem sm={3}>
              <div className="box">
                sm: 6<br />
                md: 3<br />
                lg: 10
              </div>
            </LayoutGridItem>
          </LayoutGrid>
        </div>
      </div>
    </div>
  </div>
)
