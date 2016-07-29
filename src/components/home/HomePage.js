import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import TaskList from './TaskList';
import TaskListRowItem from './TaskListRowItem';
import TaskListRow from './TaskListRow';

class HomePage extends React.Component {
 constructor(props, context) {
   super(props, context);

   this.state = {
     task: { title: "", laneTitle: "", id: 0},
     errors:{},
     adding: false
   };

   this.lane=['Todo','InQA', 'Complete' ];
   this.onTitleChange =this.onTitleChange.bind(this);
   this.onLaneChange = this.onLaneChange.bind(this);
   this.onClickSave = this.onClickSave.bind(this);
  //  this.taskRow =this.taskRow.bind(this);
 }

  onTitleChange(event) {
    const task = this.state.task;
    task.title = event.target.value;
    this.setState({task: task });
  }

  onLaneChange(event) {
   const task = this.state.task;
   task.laneTitle = event.target.value;
   this.setState({task: task });
 }

  onClickSave() {
    const task = this.state.task;
    task.id = task.id +1;
    this.setState({task: task });

    this.props.actions.createTask(this.state.task);
  }

 // taskRow(task, index) {
 //     return <TaskListRowItem key={index}
 //     onChange={this.onLaneChange}
 //     titleName={task.title}
 //     ></TaskListRowItem>
 //   }

 findTasks (tasks, lane) {
   console.log(tasks);
   console.log(lane);
   let temp = [];
   tasks.map((task) => {
     if (task.laneTitle === lane.toLowerCase()) {
       temp.push(task)
     }
   })
   return temp;
 }

 render() {
   const {tasks} = this.props;
   console.log(this.props.tasks);
   return (
     <div>
       <h1>Scrum Board</h1>
       <TaskList
       onTitleChange={this.onTitleChange}
       onLaneChange={this.onLaneChange}
       onClick={this.onClickSave}
       tasks={this.props.tasks}
       errors={this.state.errors}
       adding={this.state.adding}/>

       {this.lane.map(lane =>
        <div className="col-md-4"><TaskListRow onChange={this.onLaneChange} tasks={this.findTasks(this.props.tasks, lane)} lane={lane}/></div>
      )}
      </div>
   );
 }
}

HomePage.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state)
 return{
   tasks: state.tasks
 };
}

function mapDispatchToProps(dispatch) {
 return {
   actions: bindActionCreators(taskActions, dispatch)
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
