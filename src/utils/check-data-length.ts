import { FormDataI } from '../models/form-data-type'

export function checkDataLength(data: FormDataI) {
  return Object.values(data).some((item) => item.length === 0)
}
