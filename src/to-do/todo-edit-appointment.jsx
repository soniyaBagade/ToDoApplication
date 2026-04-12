

import { useFormik } from "formik";
import { Link,useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect ,useState } from "react";


export function ToDoEditAppointment(){

    const [cookies,setcookie, removecookie] = useCookies(['user_id','user_name']);
      const [appointment, setAppointment] = useState([{id:null, title:null, description:null, date:new Date(), user_id:null}]);
    let navigate = useNavigate();
    let params = useParams();



const formik=useFormik({
    initialValues:{
      title :appointment.title,
      description:appointment.description,
      date : appointment.data,
      user_id : cookies['user_id']
    },
    onSubmit : (appointment)=>{
             axios.put(`http://localhost:3000/appointments/${params.id}`,appointment)
             .then(()=>{
                console.log('Updated..');
             })
             alert('Appointment Updated successfully..');
             navigate('/dashboard/details');
         },
         enableReinitialize: true
    })


useEffect(()=>{
         axios.get(`http://localhost:3000/appointments/${params.id}`)
         .then(response=>{
            setAppointment(response.data);
         })
},[]);


    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h4>Edit Appointments</h4>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text"  value={formik.values.title} onChange={formik.handleChange} name="title"/></dd>
                    <dt>description</dt>
                    <dd><textarea rows={4} value={formik.values.description}  onChange={formik.handleChange} cols={40} name="description"></textarea></dd>
                    <dt>Date</dt>
                    <dd><input type="date" value={formik.values.date} onChange={formik.handleChange} name="date"/></dd>
                </dl>
                <button  type="submit" className="btn btn-success">Save</button>
                <Link to="/dashboard/details" className="btn btn-danger mx-2">Cancel</Link>
            </form>
        </div>
    )
}