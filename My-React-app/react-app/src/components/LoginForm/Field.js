import React, {forwardRef} from 'react';


const Field = forwardRef(({ name, id, label, type, title, pattern, handleChange }) => {
  return (
    <div>
      <label
        name={name}
      >
        {label}
      </label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        title={title}
        pattern={pattern}
        id={id}
        noValidate
      />
    </div>
  );
})

export default Field;