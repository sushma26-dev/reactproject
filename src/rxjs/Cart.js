import { useEffect, useState } from "react";
import { prodSubject } from "./Subject";
import { deleteSubject , deleteStatus} from "./Subject";

function Cart() {
    const [data, setData] = useState([]);
    const [deleteData, setDeleteData] = useState([]);

    useEffect(() => {
        prodSubject.subscribe(data => {
            console.log("data received in cart list", data);
            setData(data);
        });
    }, []);

    // useEffect(()=>{
    //     const namesToDeleteSet = new Set(deleteData);
    //     const newArr = data.filter((name) => {
    //         // return those elements not in the namesToDeleteSet
    //         return !namesToDeleteSet.has(name);
    //       });
    //       console.log(newArr);
    // })

    
    //data = data.filter(ar => !deleteData.find(rm => (rm.name === ar.name && ar.id === rm.id) ));

    function sendProductInfo(val,index) {
        
         console.log("del in cart",val)
         setDeleteData(val);
        deleteSubject.next(val);
        deleteStatus.next(index);

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

                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.slice(0, 3).map((emp, i) =>
                            <tr key={"keyName" + i}>
                                <td scope="row">{emp.id}</td>
                                <td>{emp.title}</td>
                                <td><input type="checkbox" checked={emp.completed} onClick={e => sendProductInfo(emp, e.target.checked)} /></td>
                                {/* <td>

                                    <button id="remove" onClick={() => sendProductInfo(emp,i)}>Remove</button>

                                </td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}
export default Cart;