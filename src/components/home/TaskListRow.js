import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TaskListRowItem from './TaskListRowItem';

const TaskListRow = ({onChange, tasks, lane}) => {
  return (
      <div className="panel panel-default">
        <label className="lane-header  margin-left">{lane}</label>
        <hr className="margin-top-null margin-bottom-null"/>
        <div className="panel-body">
        {tasks.map(task =>
          <TaskListRowItem key={task.id} task={task} onChange={onChange}/>
        )}
        </div>
      </div>
  );
};

TaskListRow.propTypes = {
  onChange: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  lane:  PropTypes.string.isRequired
};

export default TaskListRow;
