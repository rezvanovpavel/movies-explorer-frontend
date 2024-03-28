import React from "react";
import { useCallback } from "react";

function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());

    if (name === 'name') {
      if (!target.checkValidity()) {
        setErrors({...errors, [name]: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис. Количество символов: минимум 2, максимум 30' });
      } else {
        setErrors({...errors, [name]: '' });
      }
    }

    if (name === 'search') {
      if (value === null || value === '') {
        setErrors({...errors, [name]: 'Нужно ввести ключевое слово' });
      } else {
        setErrors({...errors, [name]: '' });
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { setValues, values, handleChange, errors, isValid, resetForm };
}

export default useValidation;