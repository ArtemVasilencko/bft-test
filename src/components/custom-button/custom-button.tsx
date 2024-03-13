import { FormEvent } from 'react';
import './custom-button.css';
import { CLASSES } from '../../shared/classes';

interface CustomButtonProps {
  disable: boolean;
  onClick: (e: FormEvent) => void;
}

export default function CutomButton(props: CustomButtonProps) {
  const { disable, onClick } = props;
  return (
    <button className={CLASSES.CUSTOM_BUTTON} onClick={onClick} disabled={disable}>
      Отправить форму
    </button>
  );
}
