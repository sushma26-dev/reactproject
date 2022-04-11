import { useEffect, useState } from "react";
import { getProduct, deleteProduct } from "./api";
import { prodSubject } from "./Subject";
import { deleteSubject, deleteStatus } from "./Subject";
import './rxjs.css';
function ProductList() {

    const [ss, setTodo] = useState([]);
    const [data, setData] = useState([]);
    const [deleteList, setDeleteList] = useState("");
    const [deleteStatusList, setDeleteStatusList] = useState("");
    useEffect(() => {
        // make api call & set users
        getProduct().then(response => response.json())
            .then(response => {
                setTodo(response);

            });
    }, []);

    function sendProductInfo(val,status) {

        
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
//     useEffect(() => {
//     if(deleteList!==""){
//         console.log("deleteed list",deleteList);
//         var updatedEmpListPush = JSON.parse(JSON.stringify(data));
//         var userIndex = data.findIndex(doneT => doneT.id === deleteList.id);
//         deleteList.completed = false;
//             setData(updatedEmpListPush);
//             if (userIndex >= 0) {
//                 updatedEmpListPush.splice(userIndex, 1);
//                 setData(updatedEmpListPush);
//             } 
//     }
// }, [deleteList]);

    useEffect(() => {
        deleteSubject.subscribe(dataind => {
            console.log("data del in product list", dataind);
           setDeleteList(dataind);
            
        });
    }, [deleteSubject]);

    useEffect(() => {
        deleteStatus.subscribe(dataind => {
            console.log("status del in product list", dataind);
            setDeleteStatusList(dataind);
            
        });
    }, [deleteStatus]);

    // useEffect(()=>{
    //     var updatedEmpListPush = JSON.parse(JSON.stringify(data));
    //     var userIndex = data.findIndex(doneT => doneT.id === deleteList.id);
    //     deleteList.completed = false;
    //         setData(updatedEmpListPush);
    //         if (userIndex >= 0) {
    //             updatedEmpListPush.splice(userIndex, 1);
    //             setData(updatedEmpListPush);
    //         } 
    // });

    return (
        <div className="empListFull">
            <h1 className="empHeader">Product Form</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Choose</th>
                        <th scope="col">Id</th>
                        <th scope="col"> Name</th>

                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>

                    {
                        ss.slice(0, 3).map((emp, i) =>
                            <tr key={"keyName" + i} className={emp.completed === true ? "lin" : null}>
                                <td><input type="checkbox" checked={emp.completed} onClick={e => sendProductInfo(emp, e.target.checked)} /></td>
                                <td>{emp.id}</td>
                                <td>{emp.title}</td>
                                
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
}
export default ProductList;