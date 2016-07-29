import React, {PropTypes} from 'react';

const SmallSelectInput = ({name, onChange, defaultOption, value, error, options}) => {
  return(
    <div className="from-group">
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="item-select">
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

SmallSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SmallSelectInput;
