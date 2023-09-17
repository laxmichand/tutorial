import React, { useEffect, useState } from 'react';
import { getCourses, deleteTutorialsById } from "../../services/shared/register.service";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tutorials() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getCourses().then((res) => {
      setData(res);
    }).catch(err=>{
      toast.error('Error while fetching tutorial',err.response.data.message);
    })
  }, []);

  const handleDelete = (id) => {
    deleteTutorialsById(id).then((res) => {
      getCourses().then((res) => {
        toast.success('Successfully deleted tutorial', id);
        setData(res);
      }).catch(err=>{
        toast.error('Error while delete tutorial',err.response.data.message);
      })
    })
  };

  const navigateRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <div className='d-flex justify-content-end'>
        <img onClick={navigateRegister} src={'https://cdn-icons-png.flaticon.com/512/3578/3578002.png'} className='cursor-pointer float-end mb-1' height={25} width={25} alt='Add New' />
      </div>
      <table className="table table-info table-striped rounded bdr">
        <thead >
          <tr >
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col" >Description</th>
            <th scope="col">Published</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{String(item.published) === 'true' ? 'YES' : 'NO'}</td>
              <td>
                <div className="d-flex gap-2 justify-content-center" aria-label="...">
                  <NavLink to={`/update/${item._id}`}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/8539/8539634.png'} className='cursor-pointer' height={20} width={20} alt='edit' />
                  </NavLink>
                  <NavLink onClick={() => { handleDelete(item._id) }}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/1828/1828851.png'} className='cursor-pointer' height={20} width={20} alt='delete' />
                  </NavLink>
                </div>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Tutorials