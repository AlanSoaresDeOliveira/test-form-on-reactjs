import React from 'react';
import {mask as masker, unMask} from 'remask';

const InputMask = ({mask, onChange, ...props}) => {
  const handleChange = ev => {
    const originalValue = unMask(ev.target.value);
    const maskedValue = masker(originalValue, mask);
    onChange(maskedValue);

    // onChange(masker(unMask(ev.target.value), mask));
  }
  return <input {...props} onChange={handleChange} />;
}

export default InputMask;

// setBirth(mask(unMask(ev.target.value), ['99/99/9999']))