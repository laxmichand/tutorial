import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { getCoursesById } from "../../services/shared/register.service";
import { useNavigate, useParams } from 'react-router-dom';

const Register = (prop) => {
    const { id } = useParams();
    const { handleSubmit, register, reset, formState: { errors } } = useForm({ title: '', description: '', published: ''});
    const navigate = useNavigate();
    const onSubmit = (data) => {
        fetch('http://localhost:9900/tutorials/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                navigate('/tutorials');
            });

    }
    const navigateTutorial = () => {
        navigate('/tutorials');
    };

    useEffect(() => {
        if (id) {
            getCoursesById(id).then((res) => {
                console.log(res);
                if (id) {
                    reset(
                        {
                            title: res.tutorials[0].title,
                            description: res.tutorials[0].description,
                            published: Boolean(res.tutorials[0].published)
                        }
                    );
                }
            })
        } else {
            console.log('else');
            reset({
                title: '',
                description: '',
                published: ''
            })
        }

    }, [])

    return (
        <section>
            <div className="container h-50">
                <div className="row d-flex justify-content-center align-items-center h-50">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-success">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2 bg-info-subtle rounded">

                                        <p className="text-center h3 fw-semibold mb-4 mx-1 mx-md-3 mt-3">{prop.data.title}</p>

                                        <form className="mx-1 mx-md-2" onSubmit={handleSubmit(onSubmit)}>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Title</label>
                                                    <input type="text" id="form3Example1c" className="form-control" {...register('title', { required: true })} />
                                                    {errors.title && <span className='invalid'>Title is required!</span>}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Description</label>
                                                    <textarea type="textarea" id="form3Example3c" className="form-control"  {...register('description', { required: true })} />
                                                    {errors.description && <span className='invalid'>Description is required!</span>}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0 rounded">
                                                    <label className="form-label" htmlFor="form3Example4c">Published</label>
                                                    <br />
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox"
                                                            name="inlineRadioOptionsY" id="inlineRadio1" value={true} {...register('published', { required: false })} />
                                                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label><br />
                                                        {errors.published && <span>published is required!</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-end mx-3 mb-1 mt-4 mb-lg-3 text-danger  ">
                                                <button type="submit" className="btn btn-success btn-sm text-white fw-semibold">{prop.data.create}</button>
                                                <button type="button" className="btn btn-danger btn-sm text-white fw-semibold" onClick={navigateTutorial}>Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                                        <img src={'https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=400'}
                                            className="img-fluid" alt='imagehere' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
