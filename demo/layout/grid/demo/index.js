import React from 'react'
import LayoutGrid, {
  LayoutGridItem
} from '../../../../components/layout/grid/src'

export default () => (
  <div className="SUI-Preview">
    <LayoutGrid>
      <LayoutGridItem sm={6} md={3} lg={10}>
        <div className="box">
          sm: 6<br />
          md: 3<br />
          lg: 10
        </div>
      </LayoutGridItem>
      <LayoutGridItem sm={6} md={9} lg={2}>
        <div className="box">
          sm: 6<br />
          md: 9<br />
          lg: 2
        </div>
      </LayoutGridItem>
    </LayoutGrid>

    <br />
    <br />

    <LayoutGrid>
      <LayoutGridItem sm={3}>
        <div className="box">
          sm: 6<br />
          md: 9<br />
          lg: 2
        </div>
      </LayoutGridItem>
      <LayoutGridItem sm={3}>
        <div className="box">sm: 3</div>
      </LayoutGridItem>
      <LayoutGridItem sm={3}>
        <div className="box">sm: 3</div>
      </LayoutGridItem>
      <LayoutGridItem sm={3}>
        <div className="box">sm: 3</div>
      </LayoutGridItem>
    </LayoutGrid>

    <br />
    <br />

    <LayoutGrid>
      <LayoutGridItem sm={6}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={3}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={3}>
        <div className="box" />
      </LayoutGridItem>
    </LayoutGrid>

    <br />
    <br />

    <LayoutGrid>
      <LayoutGridItem sm={6}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={2}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={2}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={2}>
        <div className="box" />
      </LayoutGridItem>
    </LayoutGrid>

    <br />
    <br />

    <LayoutGrid>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
      <LayoutGridItem sm={1}>
        <div className="box" />
      </LayoutGridItem>
    </LayoutGrid>
  </div>
)
