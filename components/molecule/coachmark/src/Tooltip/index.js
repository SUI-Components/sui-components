import PropTypes from 'prop-types'

import AtomButton, {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'
import AtomImage from '@s-ui/react-atom-image'

import {
  BASE_CLASS,
  DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS,
  MINIMUM_COACHMARK_STEPS
} from '../settings.js'

const Tooltip = ({
  defaultTooltipOptions = {},
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
    <div className={`${BASE_CLASS}-tooltip`} {...tooltipProps}>
      <header className={`${BASE_CLASS}-tooltipHeader`}>
        {defaultTooltipOptions.badge ? (
          <div className={`${BASE_CLASS}-tooltipBadge`}>
            {defaultTooltipOptions.badge}
          </div>
        ) : null}

        {defaultTooltipOptions.closeIcon ? (
          <div className={`${BASE_CLASS}-tooltipCloseButton`}>
            <AtomButton
              color={atomButtonColors.NEUTRAL}
              design={atomButtonDesigns.LINK}
              size={atomButtonSizes.SMALL}
              leftIcon={defaultTooltipOptions.closeIcon}
              {...skipProps}
            />
          </div>
        ) : null}
      </header>

      <div className={`${BASE_CLASS}-tooltipContent`}>
        {defaultTooltipOptions.image ? (
          <div className={`${BASE_CLASS}-tooltipImageContainer`}>
            <div className={`${BASE_CLASS}-tooltipImage`}>
              <AtomImage
                src={defaultTooltipOptions.image.url}
                alt={defaultTooltipOptions.image.alt}
              />
            </div>
          </div>
        ) : null}

        <div className={`${BASE_CLASS}-tooltipTexts`}>
          {step.heading && (
            <h1 className={`${BASE_CLASS}-tooltipHeadingText`}>
              {step.heading}
            </h1>
          )}
          <p className={`${BASE_CLASS}-tooltipBodyText`}>{step.content}</p>
        </div>
      </div>

      <div className={`${BASE_CLASS}-tooltipFooter`}>
        {showProgress && totalSteps > MINIMUM_COACHMARK_STEPS && (
          <p className={`${BASE_CLASS}-tooltipStepCounter`}>{`${
            index + 1
          }/${totalSteps}`}</p>
        )}

        <div className={`${BASE_CLASS}-tooltipButtons`}>
          {defaultTooltipOptions?.actionButtons
            ? defaultTooltipOptions.actionButtons.map(
                ({id, color, size, design, shape}) => {
                  const isBackButton =
                    DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.BACK === id
                  const isNextButton =
                    DEFAULT_TOOLTIP_ACTION_BUTTONS_IDS.NEXT === id

                  const isBackButtonHidden =
                    (isBackButton && index === 0) ||
                    (isBackButton && hideBackButton)

                  const getButtonText = () => {
                    if (isNextButton) {
                      return isLastStep ? step.locale.last : step.locale.next
                    }

                    return step.locale.back
                  }

                  const buttonProps =
                    isBackButton && !isBackButtonHidden
                      ? backProps
                      : primaryProps

                  return isBackButtonHidden ? null : (
                    <AtomButton
                      color={color}
                      design={design}
                      size={size}
                      shape={shape}
                      {...buttonProps}
                    >
                      {getButtonText()}
                    </AtomButton>
                  )
                }
              )
            : null}
        </div>
      </div>
    </div>
  )
}

Tooltip.propTypes = {
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
        shape: PropTypes.oneOf([Object.values(atomButtonShapes)])
      })
    ])
  }),
  hideBackButton: PropTypes.bool,
  index: PropTypes.number,
  isLastStep: PropTypes.bool,
  primaryProps: PropTypes.object,
  backProps: PropTypes.object,
  showBadge: PropTypes.bool,
  showProgress: PropTypes.bool,
  size: PropTypes.number,
  skipProps: PropTypes.object,
  step: PropTypes.object,
  tooltipProps: PropTypes.object
}

export default Tooltip
