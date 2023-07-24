import DerefBorderToken from '../../../types/tokens/dereferenced/border.js'
import getBorderCSS from '../../shared/css/border.js'
import transformDashArray from '../transformers/dash-array.js'

const renderBorderToken = (name: string, token: DerefBorderToken): string => {
  const { style } = token.$value
  if (typeof style === 'string') return `$${name}: ${getBorderCSS(token)};`
  const vars = [
    `$${name}: ${getBorderCSS(token)};`,
    `$${name}-dash-array: ${transformDashArray(style.dashArray)};`,
    `$${name}-line-cap: ${style.lineCap};`
  ]
  return vars.join('\n')
}

export default renderBorderToken
