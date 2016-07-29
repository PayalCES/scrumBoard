import React, {PropTypes} from 'react';

import SelectInput from '../common/SelectInput';

const TaskList = ({onTitleChange, onLaneChange, onClick, tasks, errors, adding}) => {
  return (
    <div className="margin-top margin-left margin-right">
      <div className="row margin-bottom ">
        <div className="col-md-8">
          <label htmlFor="task">Enter new task </label>
          <input
           type="text"
           className="text-box"
           onChange={onTitleChange}
           value={tasks.title} />
        </div>
        <div className="col-md-3  padding-left-null">
          <label htmlFor="Lane">Select Lane</label>
          <SelectInput
            name="Lane"
            onChange={onLaneChange}
            className="form-control">
          </SelectInput>
        </div>
        <input type="submit"
         value={adding ? 'Adding..' :'Add'}
         className="btn btn-primary margin-top"
         onClick={onClick}/>
       </div>

      </div>
  );
};

TaskList.propTypes = {
  onTitleChange: React.PropTypes.func.isRequired,
  onLaneChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
  errors: React.PropTypes.object,
  adding: React.PropTypes.bool
};

export default TaskList;
