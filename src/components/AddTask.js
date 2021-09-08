import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [datetime, setDatetime] = useState('')
    const [complete, setComplete] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)

        if (!text) {
            alert('Please add a task')
            return
        }
        
        onAdd({
            id: Date.now(),
            text: text,
            datetime: datetime,
            complete: complete,
        })
        
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add Task'
                    value={text} onChange={(e) => {setText(e.target.value)}}
                />
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type='datetime-local' placeholder='Add Date & Time'
                value={datetime} onChange={(e) => {
                    setDatetime(e.target.value)
                }}
                />
            </div>
            <div className='submit-container'>
                <input type='submit' value='Save' className='btn btn-block'></input>
            </div>
        </form>
    )
}

export default AddTask