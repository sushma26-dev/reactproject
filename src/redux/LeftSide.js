import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './redux.css';
import { makeTodo } from "./ProductSlice";

export default function LeftSide() {

    const todoDetail = useSelector((state) => state.todoArr.todoList)
    const dispatch = useDispatch();
document.getElementsByClassName("remove").display="none";
    const [todoUpdate, setTodoUpdate] = useState([]);
    const [checkbx, setCheckbx] = useState(false);

    useEffect(() => {
        var mTodo = JSON.parse(JSON.stringify(todoUpdate));
        if (todoDetail.tdName !== undefined) {
            mTodo.push(todoDetail);
            setTodoUpdate(mTodo);
        }
    }, [todoDetail])

    function setCheck(val, che, i) {
        if (che === true) {
            setCheckbx(true);
            dispatch(makeTodo({ tdname: val.tdName, complet: true }));
        } else {
            setCheckbx(false);
            dispatch(makeTodo({ tdname: val.tdName, complet: false }));
        }
    }
    const removeTodo = (i) => {
        var mTodo = JSON.parse(JSON.stringify(todoUpdate));
        mTodo.splice(i, 1);
        setTodoUpdate(mTodo);
    }

    return (
        <div className="reduxDiv" style={{backgroundColor:"aqua"}}>
            <div style={{ paddingTop: '20px', textAlign: 'center' }}><b>ToDo List</b></div>
            <hr />
            {
                todoUpdate.map((todoval, i) =>
                    <div className='row' key={i} style={{ paddingBottom: '8px' }} >
                        <div className='col-md-1' style={{ textAlign: 'right' }}>{i + 1}.</div>
                        <div className='col-md-8'>
                            <input type='checkbox'
                                onChange={e => setCheck(todoval, e.target.checked, i)} />
                            <span className={checkbx[i] && "lin"} style={{ paddingLeft: '10px' }}>
                                {todoval.tdName}</span>
                        </div>
                        <div className="col-md-2"><button type="button" className='btn2 '
                            disabled={checkbx[i]}
                            onClick={e => removeTodo(i)} >Remove</button></div>
                    </div>
                )
            }
        </div>
    );
}