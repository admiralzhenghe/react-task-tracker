import Button from './Button'

const Task = ({ task, onDelete }) => {
    return (
        <div className="task" key={task.id}>
            <div className="task-container">
                <div className="task-text">{task.text}</div>
                <Button color="red" id={task.id} text="Delete" onDelete={onDelete}/>    
            </div>
            <div className="task-day">{task.day}</div>
        </div>
    )
}

export default Task