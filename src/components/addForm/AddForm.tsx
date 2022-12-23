

import './addForm.scss';

const AddTaskButton: React.FC = () => {
    return (
        <div className="addTask__field">
            <input type="text" name="" id="" className='taskList__input' placeholder='Enter task name' />
            <button className='taskList__button' >Add Task</button>
        </div>
    );
}

export default AddTaskButton;