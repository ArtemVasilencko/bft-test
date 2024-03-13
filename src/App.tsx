import { ChangeEvent, FormEvent, useState } from 'react';
import CustomSelect from './components/custom-select/custom-select';
import CutomButton from './components/custom-button/custom-button';
import { CLASSES } from './shared/classes';
import { COUNTRIES, SELECT_LABELS, selectOptions } from './shared/select-data';
import { filterAcommodationArr } from './utils/filter-acommodation-arr';
import { checkDataLength } from './utils/check-data-length';
import './assets/app.css';
import Header from './components/header/header';

function App() {
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    universityType: '',
    accommodationType: '',
  });
  const { country, city, universityType } = formData;
  const cityOptions = country
    ? selectOptions.CITY[country as keyof (typeof selectOptions)['CITY']]
    : [];

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Форма успешно отправлена
      \n Страна: ${formData.country}
      \n Город: ${formData.city}
      \n Тип ВУЗа: ${formData.universityType}
      \n Тип проживания: ${formData.accommodationType}`,
    );
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      city: '',
      universityType: '',
      accommodationType: '',
    });
  };

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target.value;
    setFormData({
      ...formData,
      city: selectedCity,
      universityType: '',
      accommodationType: '',
    });
  };

  const handleUniversityTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedUniversityType = e.target.value;
    setFormData({
      ...formData,
      universityType: selectedUniversityType,
      accommodationType: '',
    });
  };

  const handleAccommodationTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAccommodationType = e.target.value;
    setFormData({
      ...formData,
      accommodationType: selectedAccommodationType,
    });
  };

  return (
    <div className={CLASSES.WRAPPER}>
      <Header />
      <form className={CLASSES.APP_FORM}>
        <CustomSelect
          value={country}
          data={selectOptions.COUNTRY}
          label={SELECT_LABELS.COUNTRY}
          setValue={handleCountryChange}
        />
        <CustomSelect
          value={city}
          data={cityOptions}
          label={SELECT_LABELS.CITY}
          disable={!country}
          setValue={handleCityChange}
        />
        <CustomSelect
          value={universityType}
          data={selectOptions.UNIVERSITY_TYPE}
          disable={!city}
          label={SELECT_LABELS.UNIVERSITY}
          setValue={handleUniversityTypeChange}
        />
        <CustomSelect
          value={formData.accommodationType}
          data={
            country === COUNTRIES.BELARUS
              ? filterAcommodationArr(selectOptions.ACCOMODATION_TYPE)
              : selectOptions.ACCOMODATION_TYPE
          }
          disable={!universityType}
          label={SELECT_LABELS.ACCOMODATION}
          setValue={handleAccommodationTypeChange}
        />
        <CutomButton disable={checkDataLength(formData)} onClick={submitForm} />
      </form>
    </div>
  );
}

export default App;
