import Joyride, {ACTIONS, EVENTS, LIFECYCLE, STATUS} from 'react-joyride'

import PropTypes from 'prop-types'

import {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'
import Injector from '@s-ui/react-primitive-injector'

import DefaultTooltip from './Tooltip/index.js'
import {
  DEFAULT_SCROLL_DURATION,
  DEFAULT_SCROLL_OFFSET,
  DEFAULT_SPOTLIGHT_PADDING,
  DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS,
  DEFAULT_Z_INDEX,
  STEP_BEACON_PLACEMENT_TYPES,
  STEP_PLACEMENT_TYPES
} from './settings.js'

const MoleculeCoachmark = ({
  beaconComponent,
  callback,
  continuous = true,
  debug = false,
  defaultTooltipOptions,
  disableCloseOnEsc = false,
  disableOverlay = false,
  disableOverlayClose = false,
  disableScrolling = false,
  disableScrollParentFix = false,
  floaterProps,
  getHelpers = null,
  hideBackButton = false,
  hideCloseButton = false,
  locale,
  run = true,
  scrollDuration = DEFAULT_SCROLL_DURATION,
  scrollOffset = DEFAULT_SCROLL_OFFSET,
  scrollToFirstStep = false,
  shopSkipButton = false,
  showProgress = false,
  spotlightClicks = false,
  spotlightPadding = DEFAULT_SPOTLIGHT_PADDING,
  stepIndex,
  steps,
  styles,
  tooltipComponent: CustomTooltipComponent
}) => {
  return (
    <Joyride
      beaconComponent={beaconComponent}
      callback={callback}
      continuous={continuous}
      debug={debug}
      disableCloseOnEsc={disableCloseOnEsc}
      disableOverlay={disableOverlay}
      disableOverlayClose={disableOverlayClose}
      disableScrolling={disableScrolling}
      disableScrollParentFix={disableScrollParentFix}
      floaterProps={floaterProps}
      {...(getHelpers && {getHelpers})}
      hideBackButton={hideBackButton}
      hideCloseButton={hideCloseButton}
      locale={locale}
      run={run}
      scrollDuration={scrollDuration}
      scrollOffset={scrollOffset}
      scrollToFirstStep={scrollToFirstStep}
      shopSkipButton={shopSkipButton}
      showProgress={showProgress}
      spotlightClicks={spotlightClicks}
      spotlightPadding={spotlightPadding}
      stepIndex={stepIndex}
      steps={steps}
      styles={{
        options: {
          zIndex: DEFAULT_Z_INDEX,
          ...styles.options
        },
        ...styles.components
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tooltipComponent={props => (
        <Injector
          {...props}
          defaultTooltipOptions={defaultTooltipOptions}
          showProgress={showProgress}
          hideBackButton={hideBackButton}
        >
          {CustomTooltipComponent ? (
            <CustomTooltipComponent />
          ) : (
            <DefaultTooltip />
          )}
        </Injector>
      )}
    />
  )
}

MoleculeCoachmark.displayName = 'MoleculeCoachmark'
MoleculeCoachmark.propTypes = {
  beaconComponent: PropTypes.node,
  callback: PropTypes.fn,
  continuous: PropTypes.bool,
  debug: PropTypes.bool,

  /* When a tooltip component is not passed as a props, 
    the default tooltip should be set up to see the coachmark */
  defaultTooltipOptions: PropTypes.shape({
    badge: PropTypes.node,
    image: PropTypes.shape({url: PropTypes.string, alt: PropTypes.string}),
    closeIcon: PropTypes.node,
    actionButtons: PropTypes.arrayOf([
      PropTypes.shape({
        id: PropTypes.oneOf([
          DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.BACK,
          DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.NEXT
        ]),
        color: PropTypes.oneOf([Object.values(atomButtonColors)]),
        design: PropTypes.oneOf([Object.values(atomButtonDesigns)]),
        size: PropTypes.oneOf([Object.values(atomButtonSizes)]),
        shape: PropTypes.oneOf([atomButtonShapes])
      })
    ])
  }),
  disableCloseOnEsc: PropTypes.bool,
  disableOverlay: PropTypes.bool,
  disableOverlayClose: PropTypes.bool,
  disableScrolling: PropTypes.bool,
  disableScrollParentFix: PropTypes.bool,
  floaterProps: PropTypes.object,
  getHelpers: PropTypes.func,
  hideBackButton: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  locale: PropTypes.shape({
    back: PropTypes.string,
    close: PropTypes.string,
    last: PropTypes.string,
    next: PropTypes.string,
    open: PropTypes.string,
    skip: PropTypes.string
  }),
  run: PropTypes.bool,
  scrollOffset: PropTypes.number,
  scrollDuration: PropTypes.number,
  scrollToFirstStep: PropTypes.bool,
  showProgress: PropTypes.bool,
  shopSkipButton: PropTypes.bool,
  spotlightClicks: PropTypes.bool,
  spotlightPadding: PropTypes.number,

  /* When using stepIndex, the controlled mode is activated,
   should be controlled with the callback prop */
  stepIndex: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
      heading: PropTypes.node,
      content: PropTypes.node.isRequired,
      disableBeacon: PropTypes.bool,
      event: PropTypes.func,
      isFixed: PropTypes.bool,
      offset: PropTypes.number,
      placement: PropTypes.oneOf(Object.values(STEP_PLACEMENT_TYPES)),
      placementBeacon: PropTypes.oneOf(
        Object.values(STEP_BEACON_PLACEMENT_TYPES)
      ),
      styles: PropTypes.object,
      title: PropTypes.node
    })
  ),
  styles: PropTypes.object,
  tooltipComponent: PropTypes.node
}

export {ACTIONS as moleculeCoachmarkActions}
export {EVENTS as moleculeCoachmarkEvents}
export {STATUS as moleculeCoachmarkStatus}
export {LIFECYCLE as moleculeCoachmarkLifeCycle}
export {DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS as moleculeCoachmarkActionButtonIds}

export default MoleculeCoachmark
