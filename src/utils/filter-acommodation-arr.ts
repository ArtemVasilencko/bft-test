import { BELARUS_ACOMMODATION_TYPES } from '../shared/select-data'

export function filterAcommodationArr(arr: string[]) {
  return arr.filter(
    (item) =>
      item === BELARUS_ACOMMODATION_TYPES.HOSTEL ||
      item === BELARUS_ACOMMODATION_TYPES.NOT_INTERESTED
  )
}
