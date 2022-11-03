export const BASE_CLASS = 'sui-MoleculeCarousel'

export const CLASS_IMAGE_OBJECT_FIT = `${BASE_CLASS}--image-object-fit`
export const CLASS_FULL_HEIGHT = `${BASE_CLASS}--fullHeight`
export const CLASS_FULL_WIDTH = `${BASE_CLASS}--fullWidth`

export const handleFn = fn => (typeof fn === 'function' ? fn : () => null)

export function getItemsToRender({
  maxIndex,
  items,
  itemsToPreload,
  numOfSlides
}) {
  const preload = Math.max(itemsToPreload, numOfSlides)
  return items.slice(0, maxIndex + preload)
}

export function destroySlider(slidyInstance, doAfterDestroy) {
  slidyInstance && slidyInstance.clean() && slidyInstance.destroy()
  doAfterDestroy()
}
