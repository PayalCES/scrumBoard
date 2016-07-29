import React, {PropTypes} from 'react';

const SelectInput = ({name, onChange, defaultOption, value, error, options}) => {
  return(
    <div className="from-group">
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">Select Lane</option>
          <option value="todo">ToDo</option>
          <option value="inqa">In QA</option>
          <option value="complete">Complete</option>
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
