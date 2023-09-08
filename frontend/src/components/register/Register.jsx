import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    // formState - object contains information about the entire form state, right now here
    // we are using errors collection.
    const { handleSubmit, register, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section>
            <div className="container h-50">
                <div className="row d-flex justify-content-center align-items-center h-50">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-success">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2 bg-info-subtle rounded">

                                        <p className="text-center h3 fw-semibold mb-4 mx-1 mx-md-3 mt-3">Create New Tutorial</p>

                                        <form className="mx-1 mx-md-2" onSubmit={handleSubmit(onSubmit)}>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Title</label>
                                                    <input type="text" id="form3Example1c" className="form-control" {...register('title', {required:true})}  />
                                                    {errors.title && <span>Title is required!</span>}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Description</label>
                                                    <textarea type="textarea" id="form3Example3c" className="form-control"  {...register('description', {required:true})}/>
                                                     {errors.description && <span>Description is required!</span>}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4c">Published</label>
                                                    <input type="password" id="form3Example4c" className="form-control" />
                                                </div>
                                            </div>

                                           <div className="d-flex gap-2 justify-content-end mx-3 mb-1 mt-4 mb-lg-3 text-danger  ">
                                                <button type="submit" className="btn btn-success btn-sm text-white fw-semibold">Create</button>
                                                <button type="button" className="btn btn-danger btn-sm text-white fw-semibold">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                                        <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'}
                                            className="img-fluid" alt='image here' />
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
