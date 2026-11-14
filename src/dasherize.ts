export const dasherize = (str: unknown): string =>
  String(typeof str === 'symbol' ? str.description : str)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/--/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()

export const mustDasherize = (str: unknown, type = 'property'): string => {
  const dashed = dasherize(str)
  if (!dashed.includes('-')) {
    throw new DOMException(`${type}: ${String(str)} is not a valid ${type} name`, 'SyntaxError')
  }
  return dashed
}
