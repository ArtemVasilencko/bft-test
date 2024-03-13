import { ChangeEvent } from 'react';
import { CLASSES } from '../../shared/classes';
import './custom-select.css';

interface CustomSelectProps {
  value: string;
  label: string;
  disable?: boolean;
  data: string[];
  setValue: (value: ChangeEvent<HTMLSelectElement>) => void;
}

function CustomSelect(props: CustomSelectProps) {
  const { value, data, label, disable, setValue } = props;
  return (
    <select
      className={CLASSES.CUSTOM_SELECT}
      onChange={setValue}
      value={value}
      disabled={disable}
    >
      <option value="">{label}</option>
      {data.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
