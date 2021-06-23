import React, { useState } from 'react'
import { IState as Props } from '../../App'
import './AddToList.css'

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const initialState = {
        name: '',
        age: '',
        img: '',
        note: '',
    }
    
    const [input, setInput] = useState(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const {name, value} = event.target
        setInput({...input, [name]: value})
    }

    const handleClick = ():void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }

        setPeople([...people, {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note,
        }])

        setInput(initialState)
    }
    
    
    return (
        <div className='AddToList'>
            <input type="text" 
                name="name"
                placeholder="Name" 
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}/>
            <input type="text"
                name="age"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}/>
            <input type="text"
                name="img"
                placeholder="Image URL"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}/>
            <textarea
                name="note"
                placeholder="Note"
                className="AddToList-textarea"
                value={input.note}
                onChange={handleChange} />
            <button
                className="AddToList-btn"
                onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}

export default AddToList
