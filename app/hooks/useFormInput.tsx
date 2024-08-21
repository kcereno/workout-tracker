import { ChangeEvent, useState } from 'react';

function useFormInput() {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
}

export default useFormInput;
