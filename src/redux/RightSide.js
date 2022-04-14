import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RightSide() {

    const todoDetail1 = useSelector((state) => state.todoArr?.doneTodo)

    const [todoUpdate, setTodoUpdate] = useState([]);

    useEffect(() => {
        var mTodo = JSON.parse(JSON.stringify(todoUpdate));
        if (todoDetail1.complet === true) {
            mTodo.push(todoDetail1);
            setTodoUpdate(mTodo);
        } else {
            var userIndex = todoUpdate.findIndex(doneT => doneT.tdName === todoDetail1.tdName);
            if (userIndex >= 0) {
                mTodo.splice(userIndex, 1);
                setTodoUpdate(mTodo);
                // console.log(userIndex);
            }
        }
    }, [todoDetail1])



    return (
        <div className="reduxDiv" style={{backgroundColor:"aquamarine"}}>
            <div style={{ paddingTop: '20px', textAlign: 'center' }}><b>ToDo List Completed - {todoUpdate.length}</b></div>
            <hr />
            {
                todoUpdate.map((todoval, i) =>
                   <ul key={i} style={{ paddingBottom: '8px' }}>
                        <li>{todoval.tdName}</li>
                    </ul>
                )
            }
        </div>
    );
}