export const stringify = {}

stringify.arrayAsList = (array) => {
  if (array.length === 2) {
    return array[0] + ' and ' + array[1]
  }
  let stringified = ''
  array.forEach((element, index) => {
    if (index === array.length - 2) {
      stringified = stringified + element + ', and '
    } else if (index === array.length - 1) {
      stringified = stringified + element
    } else {
      stringified = stringified + element + ', '
    }
  })
  return stringified
}
