export interface FormDataI {
  COUNTRY: FormDataElem;
  CITY: FormDataElem;
  UNIVERSITY_TYPE: FormDataElem;
  ACCOMODATION_TYPE: FormDataElem;
  FACULTY_TYPE: FormDataElem;
}

export interface FormDataElem {
  name: string;
  label: string;
  dependentFields: string[];
  options: string[] | { [key: string]: string[] };
  value: string;
}
