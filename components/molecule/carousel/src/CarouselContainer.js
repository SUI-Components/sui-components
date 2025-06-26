import {Children, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import CarouselArrow from './CarouselArrow.js'
import CarouselItem from './CarouselItem.js'
import {destroySlider, getItemsToRender, handleFn} from './settings.js'
import slidy from './slidy.js'

const CarouselContainer = ({
  arrowLeft,
  arrowLeftLabel,
  arrowRight,
  arrowRightLabel,
  children,
  classNameBase,
  onNext,
  onPrevious,
  onSlide,
  onDestroy,
  onInit,
  onSlideAfter,
  onSlideBefore,
  ease,
  hasInfiniteLoop,
  defaultSlide,
  slide,
  itemsToPreload,
  hasKeyboardNavigation,
  numOfSlides,
  hasArrows,
  slideSpeed
}) => {
  const [slidyInstance, setSlidyInstance] = useState({
    goTo: handleFn(),
    next: handleFn(),
    prev: handleFn(),
    updateItems: handleFn()
  })
  const [index, setIndex, , initialSlide] = useControlledState(slide, defaultSlide)
  const [maxIndex, setMaxIndex] = useState(initialSlide)
  const sliderContainerDOMEl = useRef(null)
  const slidesDOMEl = useRef(null)

  const items = Children.toArray(children).filter(child => child !== null)

  useEffect(
    () => {
      handleFn(slidyInstance.goTo)(slide)
    },
    [slide, index] // eslint-disable-line
  )

  useEffect(
    () => {
      let handleKeyboard
      const slidyInstance = slidy(sliderContainerDOMEl.current, {
        ease,
        doAfterSlide: ({currentSlide, ...other}, ...args) =>
          handleFn(onSlideAfter)(
            {
              currentSlide,
              ...other,
              index,
              itemsLength: items.length,
              initialSlide,
              numOfSlides,
              maxIndex
            },
            ...args
          ),
        doBeforeSlide: ({currentSlide, nextSlide, ...other}, ...args) =>
          handleFn(onSlideBefore)(
            {
              currentSlide,
              nextSlide,
              ...other,
              index,
              itemsLength: items.length,
              defaultSlide,
              numOfSlides,
              maxIndex
            },
            ...args
          ),
        numOfSlides,
        slideSpeed,
        infiniteLoop: hasInfiniteLoop,
        slidesDOMEl: slidesDOMEl.current,
        initialSlide: index,
        items: items.length,
        onNext: nextIndex => {
          setIndex(nextIndex)
          nextIndex > maxIndex && setMaxIndex(nextIndex)
          handleFn(onNext)({
            index: nextIndex,
            itemsLength: items.length,
            initialSlide,
            numOfSlides,
            maxIndex
          })
          handleFn(onSlide)({
            index: nextIndex,
            itemsLength: items.length,
            initialSlide,
            numOfSlides,
            maxIndex
          })
          return nextIndex
        },
        onPrev: nextIndex => {
          setIndex(nextIndex)
          handleFn(onPrevious)({
            index: nextIndex,
            itemsLength: items.length,
            initialSlide,
            numOfSlides,
            maxIndex
          })
          handleFn(onSlide)({
            index: nextIndex,
            itemsLength: items.length,
            initialSlide,
            numOfSlides,
            maxIndex
          })
          return nextIndex
        }
      })
      setSlidyInstance(slidyInstance)
      handleFn(onInit)({
        index,
        itemsLength: items.length,
        initialSlide,
        numOfSlides,
        maxIndex
      })

      if (hasKeyboardNavigation) {
        handleKeyboard = e => {
          if (e.keyCode === 39) {
            handleFn(slidyInstance.next)(e)
          } else if (e.keyCode === 37) {
            handleFn(slidyInstance.prev)(e)
          }
        }
        document.addEventListener('keydown', handleKeyboard)
      }

      return () => {
        destroySlider(slidyInstance, () =>
          handleFn(onDestroy)({
            initialSlide,
            itemsLength: items.length,
            numOfSlides,
            index,
            maxIndex
          })
        )
        if (hasKeyboardNavigation) {
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
  const handleNext = e => items.length > numOfSlides && handleFn(slidyInstance.next)(e)

  return (
    <>
      <CarouselArrow
        className={cx(
          `${classNameBase}-arrow`,
          `${classNameBase}-arrowLeft`,
          arrowLeft ? `${classNameBase}-arrowCustom` : `${classNameBase}-prev`
        )}
        label={arrowLeft ? null : arrowLeftLabel}
        role={arrowLeft ? null : 'button'}
        hasArrows={hasArrows}
        disabled={index === 0 && !hasInfiniteLoop}
        onClick={handlePrev}
      >
        {arrowLeft}
      </CarouselArrow>
      <CarouselArrow
        className={cx(
          `${classNameBase}-arrow`,
          `${classNameBase}-arrowRight`,
          arrowRight ? `${classNameBase}-arrowCustom` : `${classNameBase}-next`
        )}
        label={arrowRight ? null : arrowRightLabel}
        role={arrowRight ? null : 'button'}
        hasArrows={hasArrows}
        disabled={(items.length <= numOfSlides || index === items.length - numOfSlides) && !hasInfiniteLoop}
        onClick={handleNext}
      >
        {arrowRight}
      </CarouselArrow>
      <div ref={sliderContainerDOMEl}>
        <ul className={cx(`${classNameBase}-itemsList`)} ref={slidesDOMEl}>
          {Children.map(itemsToRender, (child, currentIndex) => (
            <CarouselItem
              data-index={currentIndex}
              aria-hidden={currentIndex < index || currentIndex > index + numOfSlides}
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
  /** Element to be used as the left arrow for the slider */
  arrowLeft: PropTypes.element,
  /** Label to be used as the left arrow label for the slider */
  arrowLeftLabel: PropTypes.string,
  /** Element to be used as the right arrow for the slider */
  arrowRight: PropTypes.element,
  /** Label to be used as the right arrow label for the slider */
  arrowRightLabel: PropTypes.string,
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
  /** Indicates if the slider will start with the first slide once it ends */
  hasInfiniteLoop: PropTypes.bool,
  /** Determine the first slide to start with */
  defaultSlide: PropTypes.number,
  /** Determine the number of items that will be preloaded */
  itemsToPreload: PropTypes.number,
  /** Activate navigation by keyboard */
  hasKeyboardNavigation: PropTypes.bool,
  /** Number of slides to show at once */
  numOfSlides: PropTypes.number,
  /** Determine if arrows should be shown */
  hasArrows: PropTypes.bool,
  /** Change dynamically the slide number, perfect to use with dots */
  slide: PropTypes.number,
  /** Determine the speed of the sliding animation */
  slideSpeed: PropTypes.number
}

export default CarouselContainer
