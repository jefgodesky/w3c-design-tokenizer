import Dictionary, { isDictionary } from '../dictionary.js'
import Dimension, { isDimension } from '../basic/dimension.js'
import FontFamily, { isFontFamily } from '../basic/font-family.js'
import FontWeight, { isFontWeight } from '../basic/font-weight.js'
import Reference, { isReference } from '../basic/reference.js'

interface Typography extends Dictionary {
  fontFamily: FontFamily | Reference
  fontSize: Dimension | Reference
  fontWeight: FontWeight | Reference
  letterSpacing: Dimension | Reference
  lineHeight: number | Reference
}

const isTypography = (obj: any): obj is Typography => {
  if (!isDictionary(obj)) return false
  const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } = obj
  if (fontFamily === undefined || !(isFontFamily(fontFamily) || isReference(fontFamily))) return false
  if (fontSize === undefined || !(isDimension(fontSize) || isReference(fontSize))) return false
  if (fontWeight === undefined || !(isFontWeight(fontWeight) || isReference(fontWeight))) return false
  if (letterSpacing === undefined || !(isDimension(letterSpacing) || isReference(letterSpacing))) return false
  if (lineHeight === undefined || !(typeof lineHeight === 'number' || isReference(lineHeight))) return false
  return true
}

export default Typography
export { isTypography }
