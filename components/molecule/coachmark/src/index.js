import Joyride, {ACTIONS, EVENTS, LIFECYCLE, STATUS} from 'react-joyride'

import PropTypes from 'prop-types'

import {STEP_BEACON_PLACEMENT_TYPES, STEP_PLACEMENT_TYPES} from './settings.js'

const MoleculeCoachmark = ({
  steps,
  beaconComponent,
  callback,
  continuous = true,
  debug = false,
  disableCloseOnEsc = false,
  disableOverlay = false,
  disableOverlayClose = false,
  disableScrolling = false,
  disableScrollParentFix = false,
  floaterProps,
  getHelpers = null,
  hideBackButton = false,
  hideCloseButton = false,
  run = true,
  scrollOffset = 20,
  scrollDuration = 300,
  scrollToFirstStep = false,
  showProgress = false,
  shopSkipButton = false,
  spotlightClicks = false,
  spotlightPadding = 10,
  stepIndex,
  styles
}) => {
  return (
    <Joyride
      steps={steps}
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
      styles={styles}
      hideBackButton={hideBackButton}
      hideCloseButton={hideCloseButton}
      run={run}
      scrollOffset={scrollOffset}
      scrollDuration={scrollDuration}
      scrollToFirstStep={scrollToFirstStep}
      showProgress={showProgress}
      shopSkipButton={shopSkipButton}
      spotlightClicks={spotlightClicks}
      spotlightPadding={spotlightPadding}
      stepIndex={stepIndex}
    />
  )
}

MoleculeCoachmark.displayName = 'MoleculeCoachmark'
MoleculeCoachmark.propTypes = {
  beaconComponent: PropTypes.node,
  callback: PropTypes.fn,
  continuous: PropTypes.bool,
  debug: PropTypes.bool,
  disableCloseOnEsc: PropTypes.bool,
  disableOverlay: PropTypes.bool,
  disableOverlayClose: PropTypes.bool,
  disableScrolling: PropTypes.bool,
  disableScrollParentFix: PropTypes.bool,
  floaterProps: PropTypes.object,
  getHelpers: PropTypes.func,
  hideBackButton: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  run: PropTypes.bool,
  scrollOffset: PropTypes.number,
  scrollDuration: PropTypes.number,
  scrollToFirstStep: PropTypes.bool,
  showProgress: PropTypes.bool,
  shopSkipButton: PropTypes.bool,
  spotlightClicks: PropTypes.bool,
  spotlightPadding: PropTypes.number,
  stepIndex: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      heading: PropTypes.node,
      content: PropTypes.node,
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
  styles: PropTypes.object
}

export {ACTIONS as moleculeCoachmarkActions}
export {EVENTS as moleculeCoachmarkEvents}
export {STATUS as moleculeCoachmarkStatus}
export {LIFECYCLE as moleculeCoachmarkLifeCycle}

export default MoleculeCoachmark
