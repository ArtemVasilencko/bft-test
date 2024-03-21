interface SelectOptionBase {
  name: string;
  label: string;
  dependentFields: string[];
  value: string;
  options: string[] | { [key: string]: string[] };
}

export const selectOptions: { [key: string]: SelectOptionBase } = {
  COUNTRY: {
    name: 'COUNTRY',
    label: 'Выберите страну',
    dependentFields: ['CITY', 'UNIVERSITY_TYPE', 'ACCOMODATION_TYPE'],
    options: ['РФ', 'РБ'],
    value: '',
  },
  CITY: {
    name: 'CITY',
    label: 'Выберите город',
    dependentFields: ['UNIVERSITY_TYPE', 'ACCOMODATION_TYPE'],
    options: {
      РБ: ['Минск', 'Гомель'],
      РФ: ['Москва', 'Сочи'],
    },
    value: '',
  },
  UNIVERSITY_TYPE: {
    name: 'UNIVERSITY_TYPE',
    label: 'Выберите тип ВУЗа',
    options: ['Технический', 'Гуманитарный'],
    dependentFields: ['ACCOMODATION_TYPE', 'FACULTY_TYPE'],
    value: '',
  },
  ACCOMODATION_TYPE: {
    name: 'ACCOMODATION_TYPE',
    label: 'Выберите вариант проживания',
    options: ['Аренда', 'Общежитие + Аренда', 'Общежитие', 'Не интересует'],
    dependentFields: ['FACULTY_TYPE'],
    value: '',
  },
  FACULTY_TYPE: {
    name: 'FACULTY_TYPE',
    label: 'Выберите факультет',
    options: {
      Технический: ['Математика', 'Физика'],
      Гуманитарный: ['История', 'Философия'],
    },
    dependentFields: [''],
    value: '',
  },
};

export const COUNTRIES = {
  RUSSIA: 'РФ',
  BELARUS: 'РБ',
};

export const CITIES = {
  SOCHI: 'Сочи',
};

export const BELARUS_ACOMMODATION_TYPES = ['Общежитие', 'Не интересует'];

export const SOCHI_UNVERSITY_TYPES = ['Технический'];
