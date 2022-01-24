import {ErrorIconSmall, ErrorIconLarge, styleSection} from './settings.js'

import AtomProgressBar from '../src/index.js'
import StaticWithAnimation from './StaticWithAnimation.js'
import DynamicProgressBar from './DynamicProgressBar.js'
import InputRangeProgressBar from './InputRangeProgressBar.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <h1>Line Progress Bar</h1>

      <div style={styleSection}>
        <h2>Dynamic</h2>
        <h4 style={{marginBottom: '2px'}}>Unique value with animation</h4>
        {/* <DynamicProgressBar topPercentage={65} step={65} isAnimatedOnChange /> */}
        <StaticWithAnimation percentage={25} isAnimatedOnChange />
        <h4 style={{marginBottom: '2px'}}>steps: random</h4>
        <DynamicProgressBar
          intervalTime={1000}
          indicatorTotal
          isAnimatedOnChange
        />
        <h4 style={{marginBottom: '2px'}}>steps: 25</h4>
        <DynamicProgressBar intervalTime={1000} step={25} isAnimatedOnChange />
        <h4 style={{marginBottom: '2px'}}>steps: 1 (smooth)</h4>
        <DynamicProgressBar intervalTime={1000 / 60} step={1} />
        <h4 style={{marginBottom: '2px'}}>Unique value without indicator</h4>
        <StaticWithAnimation percentage={25} isAnimatedOnChange hideIndicator />
      </div>

      <div style={styleSection}>
        <h2>Basic</h2>
        <AtomProgressBar percentage={25} />
        <h2>Manual</h2>
        <InputRangeProgressBar step={1} />
      </div>

      <div style={styleSection}>
        <h2>Indicator Bottom</h2>
        <AtomProgressBar percentage={25} indicatorBottom />
      </div>

      <div style={styleSection}>
        <h2>Indicator Total</h2>
        <AtomProgressBar percentage={25} indicatorTotal />
      </div>

      <h1>Circle Progress Bar</h1>

      <div style={styleSection}>
        <h2>Dynamic</h2>
        <h4 style={{marginBottom: '2px'}}>Unique value with animation</h4>
        {/* <DynamicProgressBar topPercentage={65} step={65}  type="circle" isAnimatedOnChange /> */}
        <StaticWithAnimation percentage={25} type="circle" isAnimatedOnChange />
        <h4 style={{marginBottom: '2px'}}>steps: random</h4>
        <DynamicProgressBar
          intervalTime={1000}
          type="circle"
          indicatorTotal
          isAnimatedOnChange
        />
        <h4 style={{marginBottom: '2px'}}>steps: 25</h4>
        <DynamicProgressBar
          intervalTime={1000}
          type="circle"
          step={25}
          isAnimatedOnChange
        />
        <h4 style={{marginBottom: '2px'}}>steps: 1 (smooth)</h4>
        <DynamicProgressBar intervalTime={1000 / 60} type="circle" step={1} />
      </div>

      <div style={styleSection}>
        <h2>Basic</h2>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar percentage={25} type="circle" />
        </div>
        <h2>Basic with children</h2>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar percentage={25} type="circle" size="medium">
            <ErrorIconLarge />
          </AtomProgressBar>
        </div>
        <h3>Without indicator</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar percentage={25} type="circle" hideIndicator />
        </div>
        <h2>With Error</h2>
        <h3>Large</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar
            percentage={0}
            type="circle"
            status="error"
            errorIcon={<ErrorIconLarge />}
          />
        </div>
        <h3>Medium</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar
            percentage={0}
            type="circle"
            status="error"
            size="medium"
            errorIcon={<ErrorIconLarge />}
          />
        </div>
        <h3>Small</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar
            percentage={0}
            type="circle"
            status="error"
            size="small"
            errorIcon={<ErrorIconSmall />}
          />
        </div>
        <h2>Loading</h2>
        <h3>Large</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar percentage={0} type="circle" status="loading" />
        </div>
        <h3>Medium</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar
            percentage={0}
            type="circle"
            size="medium"
            status="loading"
          />
        </div>
        <h3>Small</h3>
        <div style={{background: 'white', padding: '10px'}}>
          <AtomProgressBar
            percentage={0}
            type="circle"
            size="small"
            status="loading"
          />
        </div>
        <h2>Manual</h2>
        <h3>Large</h3>
        <InputRangeProgressBar type="circle" step={1} />
        <h3>Small</h3>
        <InputRangeProgressBar type="circle" size="small" step={1} />
      </div>

      <h1>Line Double Progress Bar</h1>
      <div style={styleSection}>
        <h2>Dynamic</h2>
        <h4 style={{marginBottom: '2px'}}>Unique value with animation</h4>
        <StaticWithAnimation
          mainBarPercentage={25}
          extraBarPercentage={50}
          type="lineDoubleBar"
          isAnimatedOnChange
        />
        <h4 style={{marginBottom: '2px'}}>Unique value without indicator</h4>
        <StaticWithAnimation
          mainBarPercentage={25}
          extraBarPercentage={50}
          type="lineDoubleBar"
          isAnimatedOnChange
          hideIndicator
        />
      </div>
      <div style={styleSection}>
        <h2>Basic</h2>
        <AtomProgressBar
          mainBarPercentage={25}
          extraBarPercentage={50}
          type="lineDoubleBar"
        />
      </div>
      <div style={styleSection}>
        <h2>Indicator Bottom</h2>
        <AtomProgressBar
          mainBarPercentage={25}
          extraBarPercentage={50}
          type="lineDoubleBar"
          indicatorBottom
        />
      </div>

      <div style={styleSection}>
        <h2>Indicator Total</h2>
        <AtomProgressBar
          mainBarPercentage={25}
          extraBarPercentage={50}
          type="lineDoubleBar"
          indicatorTotal
        />
      </div>
    </div>
  )
}

export default Demo
