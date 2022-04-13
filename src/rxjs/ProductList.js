import { useEffect, useState } from "react";
import { getProduct, deleteProduct } from "./api";
import { prodSubject } from "./Subject";
import { deleteSubject } from "./Subject";
import './rxjs.css';
function ProductList() {

    const [ss, setTodo] = useState([]);
    const [data, setData] = useState([]);
    const [deleteList, setDeleteList] = useState("");
    useEffect(() => {
        // make api call & set users
        getProduct().then(response => response.json())
            .then(response => {
                setTodo(response);

            });
    }, []);

    function sendProductInfo(val, status) {


        var updatedEmpListPush = JSON.parse(JSON.stringify(data));
        if (status === true) {
            val.completed = true;

            updatedEmpListPush.push(val);
            setData(updatedEmpListPush);
            console.log(updatedEmpListPush);
            prodSubject.next(updatedEmpListPush);
        }
        else {
            var userIndex = data.findIndex(doneT => doneT.id === val.id);
            val.completed = false;
            setData(updatedEmpListPush);
            if (userIndex >= 0) {
                updatedEmpListPush.splice(userIndex, 1);
                prodSubject.next(updatedEmpListPush);
            }
        }

        var userIndex = data.findIndex(doneT => doneT.id === deleteList.id);
        deleteList.completed = false;
        setData(updatedEmpListPush);
        if (userIndex >= 0) {
            updatedEmpListPush.splice(userIndex, 1);
            setData(updatedEmpListPush);
        }

    }
    
    useEffect(() => {
        var newArray = data.filter((item) => item.id !== deleteList.id);
        console.log(newArray);
        setData(newArray);
    }, [deleteList]);

    useEffect(() => {
        deleteSubject.subscribe(dataind => {
            console.log("data del in product list", dataind);
            setDeleteList(dataind);

        });
    }, [deleteSubject]);

    

    
    return (
        <div className="empListFull">
            <h1 className="empHeader">Product Form</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Choose</th>
                        <th scope="col">Id</th>
                        <th scope="col"> Name</th>
                        <th scope="col"> Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        ss.map((emp, i) =>
                            <tr key={"keyName" + i} className={emp.completed === true ? "lin" : null}>
                                <td><input type="checkbox" checked={emp.completed} onClick={e => sendProductInfo(emp, e.target.checked)} /></td>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.price}</td>

                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
}
export default ProductList;