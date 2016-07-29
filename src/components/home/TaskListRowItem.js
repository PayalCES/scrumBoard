import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import SmallSelectInput from '../common/SmallSelectInput';

const TaskListRowItem = ({onChange, task}) => {
  console.log(task);
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <SmallSelectInput
          name="Lane"
          value={task.laneTitle}
          onChange={onChange}
          className="item-select">
        </SmallSelectInput>
        <div className="margin-top text-wrap">
        {task.title}
        </div>
      </div>
      <hr className="margin-top-null"/>
    </div>
  );
};

TaskListRowItem.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  task: PropTypes.string.isRequired
};

export default TaskListRowItem;
