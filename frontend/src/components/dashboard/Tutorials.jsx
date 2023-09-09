import React, { useEffect, useState } from 'react';

import useFetch from '../../services/shared/common';
import { getCourses } from "../../services/shared/register.service";
import {useNavigate} from 'react-router-dom';


function Tutorials() {
  const navigate = useNavigate();
  const [data, setData] = useState([])

  useEffect(() => {
    getCourses().then((res) => {
      setData(res.tutorials);
    })
  }, [])

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
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col" >Description</th>
            <th scope="col">Published</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{String(item.published)}</td>
              <td>
                <div class="d-flex gap-2 justify-content-center" aria-label="...">
                  <img src={'https://cdn-icons-png.flaticon.com/512/8539/8539634.png'} className='cursor-pointer' height={20} width={20} alt='edit' />
                  <img src={'https://cdn-icons-png.flaticon.com/512/1828/1828851.png'} className='cursor-pointer' height={20} width={20} alt='delete' />
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