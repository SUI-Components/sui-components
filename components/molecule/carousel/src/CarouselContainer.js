import {Children, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import CarouselArrow from './CarouselArrow.js'
import CarouselItem from './CarouselItem.js'
import {destroySlider, getItemsToRender, handleFn} from './settings.js'
import slidy from './slidy.js'

const CarouselContainer = ({
  ArrowLeft,
  ArrowRight,
  children,
  classNameBase,
  doAfterDestroy,
  doAfterInit,
  doAfterSlide,
  doBeforeSlide,
  ease,
  infiniteLoop,
  initialSlide,
  itemsToPreload,
  keyboardNavigation,
  numOfSlides,
  showArrows,
  slide,
  slideSpeed
}) => {
  const [slidyInstance, setSlidyInstance] = useState({
    goTo: handleFn(),
    next: handleFn(),
    prev: handleFn(),
    updateItems: handleFn()
  })
  const [index, setIndex] = useState(initialSlide)
  const [maxIndex, setMaxIndex] = useState(initialSlide)
  const sliderContainerDOMEl = useRef(null)
  const slidesDOMEl = useRef(null)

  const items = Children.toArray(children).filter(child => child !== null)

  useEffect(
    function () {
      slide !== index && handleFn(slidyInstance.goTo)(slide)
    },
    [slide] // eslint-disable-line
  )

  useEffect(
    () => {
      let handleKeyboard
      const slidyInstance = slidy(sliderContainerDOMEl.current, {
        ease,
        doAfterSlide: handleFn(doAfterSlide),
        doBeforeSlide: handleFn(doBeforeSlide),
        numOfSlides,
        slideSpeed,
        infiniteLoop,
        slidesDOMEl: slidesDOMEl.current,
        initialSlide: index,
        items: items.length,
        onNext: nextIndex => {
          setIndex(nextIndex)
          nextIndex > maxIndex && setMaxIndex(nextIndex)
          return nextIndex
        },
        onPrev: nextIndex => {
          setIndex(nextIndex)
          return nextIndex
        }
      })
      setSlidyInstance(slidyInstance)
      handleFn(doAfterInit)()

      if (keyboardNavigation) {
        handleKeyboard = e => {
          if (e.keyCode === 39) handleFn(slidyInstance.next)(e)
          else if (e.keyCode === 37) handleFn(slidyInstance.prev)(e)
        }
        document.addEventListener('keydown', handleKeyboard)
      }

      return () => {
        destroySlider(slidyInstance, handleFn(doAfterDestroy))
        if (keyboardNavigation) {
          document.removeEventListener('keydown', handleKeyboard)
        }
      }
    },
    [] // eslint-disable-line
  )

  useEffect(function () {
    slidyInstance && handleFn(slidyInstance.updateItems)(items.length)
  })

  const itemsToRender = getItemsToRender({
    index,
    maxIndex,
    items,
    itemsToPreload,
    numOfSlides
  })

  const handlePrev = e => handleFn(slidyInstance.prev)(e)
  const handleNext = e =>
    items.length > numOfSlides && handleFn(slidyInstance.next)(e)

  return (
    <>
      <CarouselArrow
        as={ArrowLeft}
        className={cx(
          `${classNameBase}-arrow`,
          `${classNameBase}-arrowLeft`,
          !ArrowLeft && `${classNameBase}-prev`
        )}
        label={ArrowLeft ? null : 'Previous'}
        role={ArrowLeft ? null : 'button'}
        showArrows={showArrows}
        disabled={index === 0 && !infiniteLoop}
        onClick={handlePrev}
      />
      <CarouselArrow
        as={ArrowRight}
        className={cx(
          `${classNameBase}-arrow`,
          `${classNameBase}-arrowRight`,
          !ArrowRight && `${classNameBase}-next`
        )}
        label={ArrowRight ? null : 'Next'}
        role={ArrowRight ? null : 'button'}
        showArrows={showArrows}
        disabled={
          (items.length <= numOfSlides ||
            index === items.length - numOfSlides) &&
          !infiniteLoop
        }
        onClick={handleNext}
      />
      <div ref={sliderContainerDOMEl}>
        <ul className={cx(`${classNameBase}-itemsList`)} ref={slidesDOMEl}>
          {Children.map(itemsToRender, child => (
            <CarouselItem
              classNameBase={classNameBase}
              itemsLength={numOfSlides}
            >
              {child}
            </CarouselItem>
          ))}
        </ul>
      </div>
    </>
  )
}

CarouselContainer.propTypes = {
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
  /** Indicates if the slider will start with the first slide once it ends */
  infiniteLoop: PropTypes.bool,
  /** Determine the first slide to start with */
  initialSlide: PropTypes.number,
  /** Determine the number of items that will be preloaded */
  itemsToPreload: PropTypes.number,
  /** Activate navigation by keyboard */
  keyboardNavigation: PropTypes.bool,
  /** Number of slides to show at once */
  numOfSlides: PropTypes.number,
  /** Determine if arrows should be shown */
  showArrows: PropTypes.bool,
  /** Change dynamically the slide number, perfect to use with dots */
  slide: PropTypes.number,
  /** Determine the speed of the sliding animation */
  slideSpeed: PropTypes.number
}

export default CarouselContainer
