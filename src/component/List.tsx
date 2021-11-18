import React from "react";
import {Istate as IProps} from "../App"

  
const List:React.FC<IProps>=({fruit})=>{
    const renderList=(): JSX.Element[]=>{
        return fruit.map((fruitlist)=>{
        return (
            <li className="List">
                <div className="List-header">
                    <img className="List-img"src={fruitlist.url}/>
                    <h2>{fruitlist.name}</h2>
                </div>
                <p>{fruitlist.price} rupees</p>
                <p className="List-note">{fruitlist.note}</p>
            </li>
        )
    })

    }
    return(
        <ul>
            {renderList()}
        </ul>
    )
}
export default List;