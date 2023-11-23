import {Children} from 'react'

export const BASE_CLASS = 'sui-MoleculeCarousel'

export const CLASS_IMAGE_OBJECT_FIT = `${BASE_CLASS}--image-object-fit`
export const CLASS_FULL_HEIGHT = `${BASE_CLASS}--fullHeight`
export const CLASS_FULL_WIDTH = `${BASE_CLASS}--fullWidth`

export const handleFn = fn => (typeof fn === 'function' ? fn : () => null)

export function getItemsToRender({maxIndex, items, itemsToPreload, numOfSlides}) {
  const preload = Math.max(itemsToPreload, numOfSlides)
  return items.slice(0, maxIndex + preload)
}

export function destroySlider(slidyInstance, doAfterDestroy) {
  slidyInstance && slidyInstance.clean() && slidyInstance.destroy()
  doAfterDestroy()
}

export const getNumOfSlidesSanitized = ({numOfSlides, children, isSanitized}) =>
  isSanitized ? Math.min(numOfSlides, Children.count(children)) : numOfSlides

export const adaptReactSlidyProps = ({
  useFullWidth: isFullWidth,
  useFullHeight: isFullHeight,
  keyboardNavigation: hasKeyboardNavigation,
  infiniteLoop: hasInfiniteLoop,
  lazyLoadSlider: hasLazyLoadSlider,
  sanitize: isSanitized,
  showArrows: hasArrows,
  doAfterInit: onInit,
  doAfterDestroy: onDestroy,
  doAfterSlide: onSlideAfter,
  doBeforeSlide: onSlideBefore,
  initialSlide: defaultSlide,
  ArrowLeft,
  ArrowRight,
  ...props
}) => ({
  ...props,
  isFullWidth,
  isFullHeight,
  hasKeyboardNavigation,
  hasInfiniteLoop,
  hasLazyLoadSlider,
  isSanitized,
  hasArrows,
  onInit,
  onDestroy,
  onSlideAfter,
  onSlideBefore,
  defaultSlide,
  arrowLeft: ArrowLeft ? <ArrowLeft /> : undefined,
  arrowRight: ArrowRight ? <ArrowRight /> : undefined
})
