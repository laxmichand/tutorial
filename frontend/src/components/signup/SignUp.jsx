import React, { useState } from 'react';

function SignUp(prop) {

    const [form, setForm] = useState({
        username: '',
        password: ''
      });
    
      const printValues = (evt) => {
        evt.preventDefault(); // preventing default implementation of a form - submiting to the action
        console.log(form.username + ' ' + form.password);
      }
      const updateField = (evt) => {
        setForm({
          ...form,
          [evt.target.name]: evt.target.value
        })
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

                    <p className="text-center h3 fw-semibold mb-4 mx-1 mx-md-3 mt-3">{prop.data.title}</p>

                    <form className="mx-1 mx-md-2" onSubmit={printValues}>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Username</label>
                          <input type="text" id="form3Example1c" className="form-control" value={form.username} name='username'
                            onChange={updateField} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Password</label>
                          <input type="text" id="form3Example3c" className="form-control" name='password'
                            onChange={updateField} value={form.password} />
                        </div>
                      </div>
                      <div className="d-flex gap-2 justify-content-end mx-3 mb-1 mt-4 mb-lg-3 text-danger  ">
                        <button type="submit" className="btn btn-success btn-sm text-white fw-semibold">{prop.data.create}</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 justify-content-center col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                    <img src={'https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg'} width={300}
                      className="img-fluid" alt='imagehere' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp