import {Children, forwardRef, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import CarouselContainer from './CarouselContainer.js'
import {
  BASE_CLASS,
  CLASS_FULL_HEIGHT,
  CLASS_FULL_WIDTH,
  CLASS_IMAGE_OBJECT_FIT
} from './settings.js'

const MoleculeCarousel = forwardRef(
  (
    {
      ArrowLeft,
      ArrowRight,
      children,
      classNameBase = BASE_CLASS,
      doAfterDestroy,
      doAfterInit,
      doAfterSlide,
      doBeforeSlide,
      imageObjectFit,
      infiniteLoop = false,
      itemsToPreload = 1,
      initialSlide = 0,
      ease = 'ease',
      lazyLoadSlider = true,
      lazyLoadConfig = {offset: 150},
      keyboardNavigation = false,
      numOfSlides = 1,
      sanitize = true,
      slide = 0,
      slideSpeed = 500,
      showArrows = true,
      isFullHeight = false,
      isFullWidth = true
    },
    forwardedRef
  ) => {
    const [showSlider, setShowSlider] = useState(!lazyLoadSlider)
    const innerRef = useRef(null)
    const ref = useMergeRefs(forwardedRef, innerRef)

    useEffect(
      () => {
        let observer
        if (lazyLoadSlider) {
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

    const numOfSlidesSanitized = Math.min(numOfSlides, Children.count(children))

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
            ArrowLeft={ArrowLeft}
            ArrowRight={ArrowRight}
            children={children}
            classNameBase={classNameBase}
            doAfterDestroy={doAfterDestroy}
            doAfterInit={doAfterInit}
            doAfterSlide={doAfterSlide}
            doBeforeSlide={doBeforeSlide}
            ease={ease}
            infiniteLoop={infiniteLoop}
            initialSlide={initialSlide}
            itemsToPreload={itemsToPreload}
            keyboardNavigation={keyboardNavigation}
            showArrows={showArrows}
            slide={slide}
            slideSpeed={slideSpeed}
            numOfSlides={sanitize ? numOfSlidesSanitized : numOfSlides}
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
  ArrowLeft: PropTypes.elementType,
  /** Component to be used as the right arrow for the slider */
  ArrowRight: PropTypes.elementType,
  /** Children to be used as slides for the slider */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  /** Class base to create all clases for elements. Styles might break if you modify it. */
  classNameBase: PropTypes.string,
  /** Function that will be executed AFTER destroying the slider. Useful for clean up stuff */
  doAfterDestroy: PropTypes.func,
  /** Function that will be executed AFTER initializing  the slider */
  doAfterInit: PropTypes.func,
  /** Function that will be executed AFTER slide transition has ended */
  doAfterSlide: PropTypes.func,
  /** Function that will be executed BEFORE slide is happening */
  doBeforeSlide: PropTypes.func,
  /** Ease mode to use on translations */
  ease: PropTypes.string,
  /** Determine the object-fit property for the images */
  imageObjectFit: PropTypes.oneOf(['cover', 'contain']),
  /** Indicates if the slider will start with the first slide once it ends */
  infiniteLoop: PropTypes.bool,
  /** Determine the number of items that will be preloaded */
  itemsToPreload: PropTypes.number,
  /** Determine the first slide to start with */
  initialSlide: PropTypes.number,
  /** Activate navigation by keyboard */
  keyboardNavigation: PropTypes.bool,
  /** Determine if the slider will be lazy loaded using Intersection Observer */
  lazyLoadSlider: PropTypes.bool,
  /** Configuration for lazy loading. Only needed if lazyLoadSlider is true */
  lazyLoadConfig: PropTypes.shape({
    /** Distance which the slider will be loaded */
    offset: PropTypes.number
  }),
  /** Number of slides to show at once */
  numOfSlides: PropTypes.number,
  /** Determine if we want to sanitize the slides or take numberOfSlider directly */
  sanitize: PropTypes.bool,
  /** Change dynamically the slide number, perfect to use with dots */
  slide: PropTypes.number,
  /** Determine if arrows should be shown */
  showArrows: PropTypes.bool,
  /** Determine the speed of the sliding animation */
  slideSpeed: PropTypes.number,
  /** Use the full width of the container for the image */
  isFullWidth: PropTypes.bool,
  /** Use the full height of the container adding some styles to the elements */
  isFullHeight: PropTypes.bool
}

export default MoleculeCarousel
