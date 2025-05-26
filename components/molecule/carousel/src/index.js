import {forwardRef, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import CarouselContainer from './CarouselContainer.js'
import {
  adaptReactSlidyProps,
  BASE_CLASS,
  CLASS_FULL_HEIGHT,
  CLASS_FULL_WIDTH,
  CLASS_IMAGE_OBJECT_FIT,
  getNumOfSlidesSanitized
} from './settings.js'

const MoleculeCarousel = forwardRef(
  (
    {
      arrowLeft,
      arrowLeftLabel,
      arrowRight,
      arrowRightLabel,
      children,
      classNameBase = BASE_CLASS,
      onDestroy,
      onInit,
      onSlideAfter,
      onSlideBefore,
      imageObjectFit,
      onNext,
      onPrevious,
      onSlide,
      hasInfiniteLoop = false,
      itemsToPreload = 1,
      defaultSlide = 0,
      slide,
      ease = 'ease',
      hasLazyLoadSlider = true,
      lazyLoadConfig = {offset: 150},
      hasKeyboardNavigation = false,
      numOfSlides = 1,
      isSanitized = true,
      slideSpeed = 500,
      hasArrows = true,
      isFullHeight = false,
      isFullWidth = true
    },
    forwardedRef
  ) => {
    const [showSlider, setShowSlider] = useState(!hasLazyLoadSlider)
    const innerRef = useRef(null)
    const ref = useMergeRefs(forwardedRef, innerRef)

    useEffect(
      () => {
        let observer
        if (hasLazyLoadSlider) {
          const initLazyLoadSlider = () => {
            // if we support IntersectionObserver, let's use it
            const {offset = 0} = lazyLoadConfig
            observer = new window.IntersectionObserver(handleIntersection, {
              rootMargin: `${offset}px 0px 0px`
            })
            observer.observe(innerRef.current)
          }

          if (!('IntersectionObserver' in window)) {
            import('intersection-observer').then(initLazyLoadSlider)
          } else {
            initLazyLoadSlider()
          }
        }

        return () => observer && observer.disconnect()
      },
      [] // eslint-disable-line
    )

    const handleIntersection = ([entry], observer) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        setShowSlider(true)
      }
    }

    return (
      <div
        ref={ref}
        className={cx(
          BASE_CLASS,
          isFullHeight && CLASS_FULL_HEIGHT,
          isFullWidth && CLASS_FULL_WIDTH,
          imageObjectFit && `${CLASS_IMAGE_OBJECT_FIT}-${imageObjectFit}`
        )}
      >
        {showSlider && (
          <CarouselContainer
            arrowLeft={arrowLeft}
            arrowLeftLabel={arrowLeftLabel}
            arrowRight={arrowRight}
            arrowRightLabel={arrowRightLabel}
            children={children}
            classNameBase={classNameBase}
            onDestroy={onDestroy}
            onInit={onInit}
            onSlideAfter={onSlideAfter}
            onSlideBefore={onSlideBefore}
            onNext={onNext}
            onPrevious={onPrevious}
            onSlide={onSlide}
            ease={ease}
            hasInfiniteLoop={hasInfiniteLoop}
            defaultSlide={defaultSlide}
            slide={slide}
            itemsToPreload={itemsToPreload}
            hasKeyboardNavigation={hasKeyboardNavigation}
            hasArrows={hasArrows}
            slideSpeed={slideSpeed}
            numOfSlides={getNumOfSlidesSanitized({
              isSanitized,
              numOfSlides,
              children
            })}
          >
            {children}
          </CarouselContainer>
        )}
      </div>
    )
  }
)

MoleculeCarousel.displayName = 'MoleculeCarousel'
MoleculeCarousel.propTypes = {
  /** Component to be used as the left arrow for the slider */
  arrowLeft: PropTypes.element,
  /** Label to be used as the left arrow label for the slider */
  arrowLeftLabel: PropTypes.string,
  /** Label to be used as the right arrow label for the slider */
  arrowRightLabel: PropTypes.string,
  /** Component to be used as the right arrow for the slider */
  arrowRight: PropTypes.element,
  /** Children to be used as slides for the slider */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  /** Class base to create all clases for elements. Styles might break if you modify it. */
  classNameBase: PropTypes.string,
  /** Function that will be executed AFTER destroying the slider. Useful for clean up stuff */
  onDestroy: PropTypes.func,
  /** Function that will be executed AFTER initializing  the slider */
  onInit: PropTypes.func,
  /** Function that will be executed AFTER slide transition has ended */
  onSlideAfter: PropTypes.func,
  /** change index handler **/
  onSlide: PropTypes.func,
  /** Function that will be executed BEFORE slide is happening */
  onSlideBefore: PropTypes.func,
  /** next handler **/
  onNext: PropTypes.func,
  /** previous handler **/
  onPrevious: PropTypes.func,
  /** Ease mode to use on translations */
  ease: PropTypes.string,
  /** Determine the object-fit property for the images */
  imageObjectFit: PropTypes.oneOf(['cover', 'contain']),
  /** Indicates if the slider will start with the first slide once it ends */
  hasInfiniteLoop: PropTypes.bool,
  /** Determine the number of items that will be preloaded */
  itemsToPreload: PropTypes.number,
  /** Determine the first slide to start with */
  defaultSlide: PropTypes.number,
  /** Change dynamically the slide number, perfect to use with dots */
  slide: PropTypes.number,
  /** Activate navigation by keyboard */
  hasKeyboardNavigation: PropTypes.bool,
  /** Determine if the slider will be lazy loaded using Intersection Observer */
  hasLazyLoadSlider: PropTypes.bool,
  /** Configuration for lazy loading. Only needed if lazyLoadSlider is true */
  lazyLoadConfig: PropTypes.shape({
    /** Distance which the slider will be loaded */
    offset: PropTypes.number
  }),
  /** Number of slides to show at once */
  numOfSlides: PropTypes.number,
  /** Determine if we want to sanitize the slides or take numberOfSlider directly */
  isSanitized: PropTypes.bool,
  /** Determine if arrows should be shown */
  hasArrows: PropTypes.bool,
  /** Determine the speed of the sliding animation */
  slideSpeed: PropTypes.number,
  /** Use the full width of the container for the image */
  isFullWidth: PropTypes.bool,
  /** Use the full height of the container adding some styles to the elements */
  isFullHeight: PropTypes.bool
}

export default MoleculeCarousel

export {adaptReactSlidyProps}
