import { ChangeEvent, FormEvent, useState } from 'react';
import CustomSelect from './components/custom-select/custom-select';
import CutomButton from './components/custom-button/custom-button';
import Header from './components/header/header';
import { CLASSES } from './shared/classes';
import {
  BELARUS_ACOMMODATION_TYPES,
  CITIES,
  COUNTRIES,
  SOCHI_UNVERSITY_TYPES,
  selectOptions,
} from './shared/select-data';
import { filterSelectOptions } from './utils/filter-select-options';
import { transformData } from './utils/transform-data';
import './assets/app.css';

function App() {
  const [formData, setFormData] = useState(selectOptions);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Форма успешно отправлена
      \n Страна: ${formData.COUNTRY.value}
      \n Город: ${formData.CITY.value}
      \n Тип ВУЗа: ${formData.UNIVERSITY_TYPE.value}
      \n Тип проживания: ${formData.ACCOMODATION_TYPE.value}
      \n Тип факультета: ${formData.FACULTY_TYPE.value}`,
    );
  };

  console.log(Object.values(formData).some(item => item.value.length === 0));
  console.log(Object.values(formData));

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData(prevData => {
      const newFormData = {
        ...prevData,
        [name]: { ...prevData[name], value: value },
      };

      if (prevData[name].dependentFields.length) {
        prevData[name].dependentFields.forEach(dependentField => {
          if (newFormData[dependentField]) {
            newFormData[dependentField] = {
              ...newFormData[dependentField],
              value: '',
            };
          }
        });
      }
      return newFormData;
    });
  };

  return (
    <div className={CLASSES.WRAPPER}>
      <Header />
      <form className={CLASSES.APP_FORM}>
        <CustomSelect
          name={formData.COUNTRY.name}
          value={formData.COUNTRY.value}
          data={transformData(formData.COUNTRY.options)}
          label={formData.COUNTRY.label}
          setValue={handleChange}
        />
        <CustomSelect
          name={formData.CITY.name}
          value={formData.CITY.value}
          data={transformData(formData.CITY.options, formData.COUNTRY.value)}
          label={formData.CITY.label}
          disable={!formData.COUNTRY.value}
          setValue={handleChange}
        />
        <CustomSelect
          name={formData.UNIVERSITY_TYPE.name}
          value={formData.UNIVERSITY_TYPE.value}
          data={
            formData.CITY.value === CITIES.SOCHI
              ? filterSelectOptions(
                  transformData(formData.UNIVERSITY_TYPE.options),
                  SOCHI_UNVERSITY_TYPES,
                )
              : transformData(formData.UNIVERSITY_TYPE.options)
          }
          disable={!formData.CITY.value}
          label={formData.UNIVERSITY_TYPE.label}
          setValue={handleChange}
        />
        <CustomSelect
          name={formData.ACCOMODATION_TYPE.name}
          value={formData.ACCOMODATION_TYPE.value}
          data={
            formData.COUNTRY.value === COUNTRIES.BELARUS
              ? filterSelectOptions(
                  transformData(formData.ACCOMODATION_TYPE.options),
                  BELARUS_ACOMMODATION_TYPES,
                )
              : transformData(formData.ACCOMODATION_TYPE.options)
          }
          disable={!formData.UNIVERSITY_TYPE.value}
          label={formData.ACCOMODATION_TYPE.label}
          setValue={handleChange}
        />
        <CustomSelect
          name={formData.FACULTY_TYPE.name}
          value={formData.FACULTY_TYPE.value}
          data={transformData(
            formData.FACULTY_TYPE.options,
            formData.UNIVERSITY_TYPE.value,
          )}
          disable={!formData.ACCOMODATION_TYPE.value}
          label={formData.FACULTY_TYPE.label}
          setValue={handleChange}
        />
        <CutomButton
          disable={Object.values(formData).some(item => item.value.length === 0)}
          onClick={submitForm}
        />
      </form>
    </div>
  );
}

export default App;
