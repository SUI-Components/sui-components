import React, {useEffect, useRef, useState} from 'react'

import AtomTooltip, {
  AtomTooltipBase
} from '../../../../components/atom/tooltip/src'

const {COLORS, PLACEMENTS} = AtomTooltip
const baseClass = 'DemoTooltip'

const HtmlTooltipDecember = () => (
  <>
    Last <em>month</em> of the <strong>year</strong>
  </>
)
const iconMenuHamburguer =
  'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'

const Demo = () => {
  // Usefull for isOpen example
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const setInnerRef = innerRef => {
    ref.current = innerRef
  }

  // Usefull for isOpen example
  useEffect(() => {
    if (ref.current) {
      // Important to emulate a client event
      const event = new window.Event('touchstart')
      ref.current.dispatchEvent(event)
      setIsOpen(true)
    }
  }, [])

  return (
    <div className="DemoTooltip">
      <h1>AtomTooltip</h1>
      <h2>Basic Usage</h2>
      <p>
        <code>AtomTooltip</code> will use the <code>title</code> (plain text) of
        the wrapped element as content for the tooltip
      </p>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip>
            <u title="Last month of this year 2018" tabIndex="1">
              december
            </u>
          </AtomTooltip>
        </p>
      </div>
      <h2>Color tooltip</h2>
      <p>
        We can set <code>color</code> property to <code>AtomTooltip</code> in
        order use theme colors.
      </p>
      <small>By default it will use the default color by SCSS (black).</small>
      <div className={`${baseClass}-boxExample`}>
        {COLORS.map(colorName => (
          <p key={`color-${colorName}`}>
            Lorem ipsum dolor sit amet{' '}
            <AtomTooltip color={colorName}>
              <u title={`This is the ${colorName} color`} tabIndex="1">
                {colorName} color
              </u>
            </AtomTooltip>
          </p>
        ))}
      </div>
      <h2>HTML for content of the tooltip </h2>
      <p>
        We can also set HTML as content of the Tooltip by passing a React
        component to the prop <code>content</code> of <code>AtomTooltip</code>.
      </p>
      <small>
        By default it will use the <code>title</code> of the wrapped element as
        content of the tooltip
      </small>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip content={HtmlTooltipDecember}>
            <strong tabIndex="1">december</strong>
          </AtomTooltip>
        </p>
      </div>
      <h2>
        Positioning tooltip with <code>placement</code>
      </h2>
      <div>
        <div className={`${baseClass}-boxExample`}>
          <ul className={`${baseClass}-containerList`}>
            {/* --- bottom --- */}
            <li className={`${baseClass}-containerListItem--bottom`}>
              <AtomTooltip
                placement={PLACEMENTS.BOTTOM_START}
                content={() => <code>placement='bottom-start'</code>}
              >
                <strong tabIndex="11">bottom-start</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.BOTTOM}
                content={() => <code>placement='bottom'</code>}
              >
                <strong tabIndex="12">bottom</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.BOTTOM_END}
                content={() => <code>placement='bottom-end'</code>}
              >
                <strong tabIndex="13">bottom-end</strong>
              </AtomTooltip>
            </li>

            {/* --- left --- */}
            <li className={`${baseClass}-containerListItem--left`}>
              <AtomTooltip
                placement={PLACEMENTS.LEFT_START}
                content={() => (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <code>placement='left-start'</code>
                  </span>
                )}
              >
                <strong tabIndex="14">left-start</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.LEFT}
                content={() => (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <code>placement='left'</code>
                  </span>
                )}
              >
                <strong tabIndex="15">left</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.LEFT_END}
                content={() => (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <code>placement='left-end'</code>
                  </span>
                )}
              >
                <strong tabIndex="16">left-end</strong>
              </AtomTooltip>
            </li>

            {/* --- right --- */}
            <li className={`${baseClass}-containerListItem--right`}>
              <AtomTooltip
                placement={PLACEMENTS.RIGHT_START}
                content={() => (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <code>placement='right-start'</code>
                  </span>
                )}
              >
                <strong
                  className={`${baseClass}-containerListItem--rightLabel`}
                  tabIndex="8"
                >
                  right-start
                </strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.RIGHT}
                content={() => (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <code>placement='right'</code>
                  </span>
                )}
              >
                <strong
                  className={`${baseClass}-containerListItem--rightLabel`}
                  tabIndex="9"
                >
                  right
                </strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.RIGHT_END}
                content={() => (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <code>placement='right-end'</code>
                  </span>
                )}
              >
                <strong
                  className={`${baseClass}-containerListItem--rightLabel`}
                  tabIndex="10"
                >
                  right-end
                </strong>
              </AtomTooltip>
            </li>

            {/* --- top --- */}
            <li className={`${baseClass}-containerListItem--top`}>
              <AtomTooltip
                placement={PLACEMENTS.TOP_START}
                content={() => <code>placement='top-start'</code>}
              >
                <strong tabIndex="5">top-start</strong>
              </AtomTooltip>

              <AtomTooltip
                placement={PLACEMENTS.TOP}
                content={() => <code>placement='top'</code>}
              >
                <strong tabIndex="6">top</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={PLACEMENTS.TOP_END}
                content={() => <code>placement='top-end'</code>}
              >
                <strong tabIndex="7">top-end</strong>
              </AtomTooltip>
            </li>
          </ul>
        </div>
      </div>
      <h2>
        Maintain tooltip on hover over tooltp with <code>autohide=false</code>{' '}
        (so users can select text in tooltip)
      </h2>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip autohide={false}>
            <strong
              title="Leo sagittis dignissim ornare egestas primis parturient ante diam fusce,
          sollicitudin viverra felis inceptos turpis."
              tabIndex="1"
            >
              december
            </strong>
          </AtomTooltip>
        </p>
      </div>
      <h2>Delay on show/hide and click outside to hide</h2>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip delay={{show: 300, hide: 1500}}>
            <strong
              title="Vehicula neque sociis leo odio nostra fames ridiculus cubilia nunc,
          ultricies tortor egestas vitae sed maecenas "
              tabIndex="2"
            >
              november
            </strong>
          </AtomTooltip>
        </p>
      </div>
      <h2>
        Maximum of 4 lines with <em>ellipsis</em>
      </h2>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip placement={PLACEMENTS.BOTTOM_END}>
            <strong
              title="Hendrerit varius luctus scelerisque habitant ridiculus, vulputate mollis
          platea nunc sociosqu magna, suscipit montes ullamcorper vivamus. Montes
          aenean nostra magna inceptos himenaeos enim lacinia ornare libero,
          quisque sed duis placerat hac arcu porttitor lobortis rutrum,"
              tabIndex="3"
            >
              astros
            </strong>
          </AtomTooltip>
        </p>
      </div>
      <h2>
        Tooltip without arrow using <code>hideArrow</code>
      </h2>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip
            placement={PLACEMENTS.RIGHT}
            content={() => (
              <>
                Hello <strong>world</strong>!
              </>
            )}
            hideArrow
          >
            <strong tabIndex="4">astros</strong>
          </AtomTooltip>
        </p>
      </div>
      <h2>
        Buttons with <code>onClick</code> can also have a tooltip
      </h2>
      <ul>
        <li>
          Desktop (Non-touch devices)→ <code>click</code>: button action |{' '}
          <code>hover</code>: tooltip
        </li>
        <li>
          Mobile (Touch devices)→ <code>click</code>: button action |{' '}
          <code>long press</code>: tooltip
        </li>
      </ul>
      <div className={`${baseClass}-boxExample`}>
        <AtomTooltip>
          <button
            style={{
              border: '1px solid #ccc',
              fontSize: '30px'
            }}
            tabIndex="1"
            title="This menu display some cool options"
            onClick={() => console.log('👍  action triggered')}
          >
            <img height="30" src={iconMenuHamburguer} alt="" />
          </button>
        </AtomTooltip>
      </div>
      <h2>
        Manage <b>isOpen</b> status from outside
      </h2>
      <p>
        You can use the <b>isOpen</b> property to set to the AtomTooltipBase if
        it should be shown or not.
      </p>
      <div className={`${baseClass}-boxExample`}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltipBase
            isOpen={isOpen}
            onToggle={() => {}}
            innerRef={setInnerRef}
          >
            <u title="Last month of this year 2018" tabIndex="1">
              december
            </u>
          </AtomTooltipBase>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'hide tooltip' : 'open tooltip'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Demo
