import React, { useState } from "react"
import {Istate as Props} from "../App"
interface IProps{
    fruit:Props["fruit"]
    setFruit:React.Dispatch<React.SetStateAction<Props["fruit"]>>
    
}

const AddToList:React.FC<IProps> = ({fruit, setFruit})=>{
    const[input, setInput]=useState({
        name:"",
        price:"",
        img:"",
        note:""
    })
    const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleClick=():void=>{
        if(!input.name || !input.price|| !input.img){
            return 
        } 
        setFruit([
            ...fruit,
            {
                    name:input.name,
                    price: parseInt(input.price),
                     url:input.img,
                     note:input.note
            }
            
        ])
    }
    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"/>
                <input
                type="number"
                placeholder="price"
                className="AddToList-input"
                value={input.price}
                onChange={handleChange}
                name="price"/>
                <input
                type="text"
                placeholder="img"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"/>
                <input
                type="text"
                placeholder="Note"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"/>
                <button className="AddToList-btn"
                onClick={handleClick}>AddtoList</button>
                </div>
    )

}
export default AddToList;