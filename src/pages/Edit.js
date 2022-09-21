import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";


export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser();
    },[]);
    

    const fetchUser=() =>{
        http.get('/edit/'+id).then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            });
        });
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/update/'+id,inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <div className="row">
                            <div className="col-sm-6 justify-content-center">
                                <label>Name</label>
                                <input type="text" name="name" value={inputs.name || ''} onChange={handleChange} className="form-control mb-2" />
                                <label>Email</label>
                                <input type="email" name="email" value={inputs.email || ''} onChange={handleChange} className="form-control mb-2" />
                                <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}