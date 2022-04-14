import { useEffect, useState } from "react";
import { prodSubject } from "./Subject";
import { deleteSubject } from "./Subject";

function Cart() {
    const [data, setData] = useState([]);
    const [deleteData, setDeleteData] = useState([]);

    useEffect(() => {
        prodSubject.subscribe(data => {
            console.log("data received in cart list", data);
            setData(data);
        });
    }, []);

    

    function sendProductInfo(val) {
        
         console.log("del in cart",val)
        deleteSubject.next(val);

        var updatedEmpListPush = JSON.parse(JSON.stringify(data));
        var userIndex = data.findIndex(doneT => doneT.id === val.id);
        val.completed = false;
       // setData(updatedEmpListPush);
        if (userIndex >= 0) {
            updatedEmpListPush.splice(userIndex, 1);
            // prodSubject.next(updatedEmpListPush);
            setData(updatedEmpListPush);
        } 


    }
    return (
        <div>
            <h1 className="empHeader">Cart List</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col"> Name</th>
                        <th scope="col"> Price</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((emp, i) =>
                            <tr key={"keyName" + i}>
                                <td scope="row">{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.price}</td>
                                {/* <td><input type="checkbox" checked={emp.completed} onClick={e => sendProductInfo(emp)} /></td> */}
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}
export default Cart;