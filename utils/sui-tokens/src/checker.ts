import chroma from 'chroma-js'
import {z} from 'zod'

export const colorParser = z.custom<`${string}`>(val => {
  return typeof val === 'string' && chroma.valid(val)
})

export const colorRampParser = z.record(z.string(), z.string())

export const colorPrimitivesParser = z.record(colorRampParser)

export const cmSizeParser = z.custom<`${number}cm`>(val => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false
})
export const mmSizeParser = z.custom<`${number}mm`>(val => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false
})
export const QSizeParser = z.custom<`${number}Q`>(val => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false
})
export const inSizeParser = z.custom<`${number}in`>(val => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false
})
export const pcSizeParser = z.custom<`${number}pc`>(val => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false
})
export const pxSizeParser = z.custom<`${number}px`>(val => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false
})

export const sizeParser = z.union([cmSizeParser, mmSizeParser, QSizeParser, inSizeParser, pcSizeParser, pxSizeParser])

export const baseSizeParser = sizeParser
