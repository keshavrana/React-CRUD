import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import http from "../http"
export default function Home(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete('/delete/'+id).then(res=>{
            fetchAllUsers();
        })
    }

    return(
        <div>
            <h2>User Listing ...........</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr>
                        <td>{++index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-info" to={{ pathname:"/edit/"+user.id }}>Edit</Link>&nbsp;
                            <button className="btn btn-danger" type="button" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}