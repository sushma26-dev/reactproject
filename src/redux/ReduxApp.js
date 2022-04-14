import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { addTodo } from "./ProductSlice";
import './redux.css';

export default function ReduxApp() {

    const [todoName, setTodoName] = useState("");
    const dispatch = useDispatch();

    function sendTodo() {
        dispatch(addTodo(todoName));
        resetForm();
    }

    function resetForm() {
        setTodoName("");
    }
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <span style={{ color: 'white', fontSize: '1.6rem' }}>AMADIS Welcomes You!!</span>
                    <div id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className='nav-item mx-0 mx-lg-1' >
                                <Link to={'/'} className='li' style={{ color: 'white' }}>Home</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ marginTop: '30px' }} className='container todostyle'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <input className='form-control' type='text' value={todoName} onChange={e => setTodoName(e.target.value)} placeholder="Enter ToDo . . ." />
                    </div>
                    <div className='col-md-2'>
                        <button type='button' className="btn1" onClick={sendTodo} style={{fontSize:20}}>+</button>
                    </div>
                </div>
                <p style={{ marginTop: '30px' }}></p>
                <div className='row'>
                    <div className='col-md-6'><LeftSide /></div>
                    <div className='col-md-6'><RightSide /></div>
                </div>
            </div>
        </div>

    );
}