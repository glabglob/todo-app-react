
import { RiDeleteBinLine } from "react-icons/ri"; //иконка мусорки
import { RiEditBoxLine } from "react-icons/ri"; //иконка ручки

import { RiCheckboxMultipleLine } from "react-icons/ri"; //иконка чекбоса(не нажат)
import { RiCheckboxMultipleFill } from "react-icons/ri"; //иконка чекбоса(нажат)

import './taskItem.scss';

const TaskItem: React.FC = () => {
    return (
        <div className="task__item">
            <h3 className="task__item-header">Task folder name</h3>
            <ul className='task__item-list' >
                <li className='task__item-listItem' >
                    <div className="listItem-item">
                        <RiCheckboxMultipleLine className="listItem-icon chek" />
                        <span>название задачи</span>
                    </div>
                    <div className="task__item-controls">
                        <RiEditBoxLine className="listItem-icon" />
                        <RiDeleteBinLine className="listItem-icon" />
                    </div>
                </li>
                <li className='task__item-listItem' >
                    <div className="listItem-item">
                        <RiCheckboxMultipleLine className="listItem-icon chek" />
                        <span>тоже какая то задача</span>
                    </div>
                    <div className="task__item-controls">
                        <RiEditBoxLine className="listItem-icon" />
                        <RiDeleteBinLine className="listItem-icon" />
                    </div>
                </li>
                <li className='task__item-listItem' >
                    <div className="listItem-item">
                        <RiCheckboxMultipleLine className="listItem-icon chek" />
                        <span>это уже новая задача</span>
                    </div>
                    <div className="task__item-controls">
                        <RiEditBoxLine className="listItem-icon" />
                        <RiDeleteBinLine className="listItem-icon" />
                    </div>
                </li>
                <li className='task__item-listItem' >
                    <div className="listItem-item">
                        <RiCheckboxMultipleLine className="listItem-icon chek" />
                        <span>a это какая то старая задача</span>
                    </div>
                    <div className="task__item-controls">
                        <RiEditBoxLine className="listItem-icon" />
                        <RiDeleteBinLine className="listItem-icon" />
                    </div>
                </li>
                <li className='task__item-listItem' >
                    <div className="listItem-item">
                        <RiCheckboxMultipleLine className="listItem-icon chek" />
                        <span>ну это уже совсем что за задача</span>
                    </div>
                    <div className="task__item-controls">
                        <RiEditBoxLine className="listItem-icon" />
                        <RiDeleteBinLine className="listItem-icon" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TaskItem;