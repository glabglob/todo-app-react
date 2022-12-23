import TaskItem from '../taskItem/TaskItem';
import AddTaskButton from '../addForm/AddForm';
import './taskList.scss';

const TaskList: React.FC = () => {
    return (
        <div className="task__list">
            <TaskItem />
            <AddTaskButton />
        </div>
    );
}

export default TaskList;