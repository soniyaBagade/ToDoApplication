import { useFormik } from "formik";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";


export function ToDoAddAppointment(){

    const [cookies,setcookie, removecookie] = useCookies(['user_id','user_name']);
    let navigate = useNavigate();

const formik=useFormik({
    initialValues:{
      title :'',
      description:'',
      date : '',
      user_id : cookies['user_id']
    },
    onSubmit : (appointment)=>{
             axios.post('http://localhost:3000/appointments', appointment)
             .then(()=>{
                 alert('Appointment Added successfully..');
             navigate('/dashboard/details');
             });
         }
})


    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h4>Add New Appointments</h4>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="title"/></dd>
                    <dt>description</dt>
                    <dd><textarea rows={4} onChange={formik.handleChange} cols={40} name="description"></textarea></dd>
                    <dt>Date</dt>
                    <dd><input type="date" onChange={formik.handleChange} name="date"/></dd>
                </dl>
                <button  type="submit" className="btn btn-primary">Add</button>
                <Link to="/dashboard/details" className="btn btn-danger mx-2">Cancel</Link>
            </form>
        </div>
    )
}