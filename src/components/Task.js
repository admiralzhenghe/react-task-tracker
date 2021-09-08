import Button from './Button'

const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
            <div className="task-container">
                <div className="task-text">{task.text}</div>
                <Button color="red" id={task.id} onDelete={onDelete} text="Delete"/>
            </div>
            <div className="task-day">{task.datetime}</div>
        </div>
    )
}

export default Task