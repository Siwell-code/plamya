import { useState } from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = (values) => {
    const newErrors = {};
    
    if (!values.name?.trim()) {
      newErrors.name = 'Имя обязательно';
    }
    
    if (!values.email?.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    if (!values.message?.trim()) {
      newErrors.message = 'Сообщение обязательно';
    }
    
    return newErrors;
  };

  return {
    formData,
    errors,
    handleChange,
    validate,
    setFormData,
    setErrors
  };
};