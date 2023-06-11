import React, { useState } from 'react';
import envelopeImage from '@/assets/images/email.svg';
import { validateEmail } from '@/utils/constants';
import Image from 'next/image';

interface GetReFerralLinkPropsType {
  onSubmit: () => void;
}

export default function GetReFerralLink(props: GetReFerralLinkPropsType) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const { onSubmit: submitHandler } = props;
  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const buttonClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!validateEmail(value)) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    submitHandler();
    console.log('submitted');
    setValue('');
  };
  console.log(value);
  return (
    <form className='email__box'>
      <p className={`text--warning ${error ? 'error' : ''}`}>Invalid Email</p>
      <div className='input--box'>
        <Image
          className='envelope'
          src={envelopeImage}
          alt='envelope'
          width='0'
          height='0'
          style={{ height: 'auto' }}
        />
        <input
          value={value}
          placeholder='Enter your email address'
          onChange={valueChangeHandler}
        />
      </div>
      <button type='submit' onClick={buttonClickHandler}>
        Get Referral Link
      </button>
    </form>
  );
}
