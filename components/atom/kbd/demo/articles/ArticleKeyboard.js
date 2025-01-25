import PropTypes from 'prop-types'

import {Article, H2} from '@s-ui/documentation-library'

import AtomKbd from '../../src/index.js'

const ArticleKeyboard = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: 8, maxWidth: 800}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <AtomKbd>esc</AtomKbd>
          <AtomKbd>F1</AtomKbd>
          <AtomKbd>F2</AtomKbd>
          <AtomKbd>F3</AtomKbd>
          <AtomKbd>F4</AtomKbd>
          <AtomKbd>F5</AtomKbd>
          <AtomKbd>F6</AtomKbd>
          <AtomKbd>F7</AtomKbd>
          <AtomKbd>F8</AtomKbd>
          <AtomKbd>F9</AtomKbd>
          <AtomKbd>F10</AtomKbd>
          <AtomKbd>F11</AtomKbd>
          <AtomKbd>F12</AtomKbd>
          <AtomKbd>eject</AtomKbd>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <AtomKbd>§</AtomKbd>
          <AtomKbd>1</AtomKbd>
          <AtomKbd>2</AtomKbd>
          <AtomKbd>3</AtomKbd>
          <AtomKbd>4</AtomKbd>
          <AtomKbd>5</AtomKbd>
          <AtomKbd>6</AtomKbd>
          <AtomKbd>7</AtomKbd>
          <AtomKbd>8</AtomKbd>
          <AtomKbd>9</AtomKbd>
          <AtomKbd>0</AtomKbd>
          <AtomKbd>-</AtomKbd>
          <AtomKbd>=</AtomKbd>
          <AtomKbd>backspace</AtomKbd>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <AtomKbd>tab</AtomKbd>
          <AtomKbd>Q</AtomKbd>
          <AtomKbd>W</AtomKbd>
          <AtomKbd>E</AtomKbd>
          <AtomKbd>R</AtomKbd>
          <AtomKbd>T</AtomKbd>
          <AtomKbd>Y</AtomKbd>
          <AtomKbd>U</AtomKbd>
          <AtomKbd>O</AtomKbd>
          <AtomKbd>P</AtomKbd>
          <AtomKbd>[</AtomKbd>
          <AtomKbd>]</AtomKbd>
          <AtomKbd>enter</AtomKbd>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <AtomKbd>caps lock</AtomKbd>
          <AtomKbd>A</AtomKbd>
          <AtomKbd>S</AtomKbd>
          <AtomKbd>D</AtomKbd>
          <AtomKbd>F</AtomKbd>
          <AtomKbd>G</AtomKbd>
          <AtomKbd>H</AtomKbd>
          <AtomKbd>J</AtomKbd>
          <AtomKbd>K</AtomKbd>
          <AtomKbd>L</AtomKbd>
          <AtomKbd>;</AtomKbd>
          <AtomKbd>'</AtomKbd>
          <AtomKbd>\</AtomKbd>
          <AtomKbd>enter</AtomKbd>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <AtomKbd>shift</AtomKbd>
          <AtomKbd>`</AtomKbd>
          <AtomKbd>Z</AtomKbd>
          <AtomKbd>X</AtomKbd>
          <AtomKbd>C</AtomKbd>
          <AtomKbd>V</AtomKbd>
          <AtomKbd>B</AtomKbd>
          <AtomKbd>N</AtomKbd>
          <AtomKbd>M</AtomKbd>
          <AtomKbd>,</AtomKbd>
          <AtomKbd>.</AtomKbd>
          <AtomKbd>/</AtomKbd>
          <AtomKbd>right shift</AtomKbd>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <AtomKbd>fn</AtomKbd>
          <AtomKbd>control</AtomKbd>
          <AtomKbd>option</AtomKbd>
          <AtomKbd>command</AtomKbd>
          <AtomKbd>space</AtomKbd>
          <AtomKbd>command</AtomKbd>
          <AtomKbd>option</AtomKbd>
          <AtomKbd>←</AtomKbd>
          <AtomKbd>↑</AtomKbd>
          <AtomKbd>↓</AtomKbd>
          <AtomKbd>→</AtomKbd>
        </div>
      </div>
    </Article>
  )
}

ArticleKeyboard.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboard
