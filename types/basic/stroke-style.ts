const strokeStyles = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'outset', 'inset']

type StrokeStyleString = typeof strokeStyles[number]

const isStrokeStyleString = (obj: any): boolean => strokeStyles.includes(obj)

export default StrokeStyleString
export { isStrokeStyleString, strokeStyles }
