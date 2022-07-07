import React from 'react';

const FieldInput = ({
  field: { onChange, onBlur, name, value },
  form,
  type,
  id,
}) => {
  const error = form.errors[name] && form.touched[name];

  return (
    <td>
      {error && <div className="error">{form.errors[name]}</div>}
      <label htmlFor={id}>{id}</label>
      <input
        className={error ? 'input__error' : 'input'}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur} // обязательно чтобы срабатывала Валидация
      />
    </td>
  );
};

export default FieldInput;
