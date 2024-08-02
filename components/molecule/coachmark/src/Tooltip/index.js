import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomButton, {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'
import AtomImage from '@s-ui/react-atom-image'

import {BASE_CLASS, DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS, MINIMUM_COACHMARK_STEPS} from '../settings.js'

const Tooltip = ({
  tooltipOptions = {},
  index,
  isLastStep,
  primaryProps,
  size: totalSteps,
  skipProps,
  step,
  tooltipProps,
  backProps,
  hideBackButton,
  showProgress
}) => {
  return (
    <div className={`${BASE_CLASS}-tooltip`}>
      {tooltipOptions.headImage && (
        <div className={`${BASE_CLASS}-tooltipHeadImage`}>
          <AtomImage src={tooltipOptions.headImage.url} alt={tooltipOptions.headImage.alt} />
        </div>
      )}
      <div
        className={cx(`${BASE_CLASS}-tooltipContainer`, {withHeadImage: tooltipOptions.headImage})}
        {...tooltipProps}
      >
        <header className={`${BASE_CLASS}-tooltipHeader`}>
          {tooltipOptions.badge && <div className={`${BASE_CLASS}-tooltipBadge`}>{tooltipOptions.badge}</div>}

          {tooltipOptions.closeIcon && (
            <div className={`${BASE_CLASS}-tooltipCloseButton`} {...skipProps}>
              {tooltipOptions.closeIcon}
            </div>
          )}
        </header>

        <div className={`${BASE_CLASS}-tooltipContent`}>
          {tooltipOptions.image && (
            <div className={`${BASE_CLASS}-tooltipImageContainer`}>
              <div className={`${BASE_CLASS}-tooltipImage`}>
                <AtomImage src={tooltipOptions.image.url} alt={tooltipOptions.image.alt} />
              </div>
            </div>
          )}

          <div className={`${BASE_CLASS}-tooltipTexts`}>
            {step.title && <h1 className={`${BASE_CLASS}-tooltipHeadingText`}>{step.title}</h1>}
            <div className={`${BASE_CLASS}-tooltipBodyText`}>{step.content}</div>
          </div>
        </div>

        <div className={`${BASE_CLASS}-tooltipFooter`}>
          {showProgress && totalSteps > MINIMUM_COACHMARK_STEPS && (
            <p className={`${BASE_CLASS}-tooltipStepCounter`}>{`${index + 1}/${totalSteps}`}</p>
          )}

          <div className={`${BASE_CLASS}-tooltipButtons`}>
            {tooltipOptions?.actionButtons
              ? tooltipOptions.actionButtons.map(({id, color, size, design, shape, isNegative}) => {
                  const isBackButton = DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.BACK === id
                  const isNextButton = DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.NEXT === id

                  const isBackButtonHidden = (isBackButton && index === 0) || (isBackButton && hideBackButton)

                  const getButtonText = () => {
                    if (isNextButton) {
                      return isLastStep ? step.locale.last : step.locale.next
                    }

                    return step.locale.back
                  }

                  const buttonProps = isBackButton && !isBackButtonHidden ? backProps : primaryProps

                  return isBackButtonHidden ? null : (
                    <AtomButton
                      color={color}
                      design={design}
                      size={size}
                      shape={shape}
                      negative={isNegative}
                      {...buttonProps}
                    >
                      {getButtonText()}
                    </AtomButton>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  backProps: PropTypes.object,
  hideBackButton: PropTypes.bool,
  index: PropTypes.number,
  isLastStep: PropTypes.bool,
  primaryProps: PropTypes.object,
  showBadge: PropTypes.bool,
  showProgress: PropTypes.bool,
  size: PropTypes.number,
  skipProps: PropTypes.object,
  step: PropTypes.object,
  tooltipOptions: PropTypes.shape({
    badge: PropTypes.node,
    actionButtons: PropTypes.arrayOf([
      PropTypes.shape({
        id: PropTypes.oneOf([DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.BACK, DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.NEXT]),
        color: PropTypes.oneOf([Object.values(atomButtonColors)]),
        design: PropTypes.oneOf([Object.values(atomButtonDesigns)]),
        size: PropTypes.oneOf([Object.values(atomButtonSizes)]),
        shape: PropTypes.oneOf([Object.values(atomButtonShapes)]),
        isNegative: PropTypes.bool
      })
    ]),
    closeIcon: PropTypes.node,
    headImage: PropTypes.shape({url: PropTypes.string, alt: PropTypes.string}),
    image: PropTypes.shape({url: PropTypes.string, alt: PropTypes.string}),
    optionalProps: PropTypes.object
  }),
  tooltipProps: PropTypes.object
}

export default Tooltip
