// Dropdown.js
import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select">
      <select name="format" onChange={func} defaultValue='0'>
        <option value='0' disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o.toLowerCase()}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
