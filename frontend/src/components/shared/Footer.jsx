import React from 'react'

function Footer() {
  return (
    <div className="container bg-warning">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center fw-semibold text-white">
          <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
            <img src= {'https://cdn-icons-png.flaticon.com/512/9439/9439298.png'} height={25} width={25}  alt='name'/>
          </a>
          <span className="mb-3 mb-md-0  fw-semibold text-white">Tutorial Adda © 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white fw-semibold" href="/">
            <img src= {'https://cdn-icons-png.flaticon.com/512/5968/5968764.png'} height={25} width={25}  alt='name'/>
          </a>
          </li>
          <li className="ms-3">
          <a className="text-white fw-semibold" href="/">
            <img src= {'https://cdn-icons-png.flaticon.com/512/1384/1384063.png'} height={25} width={25}  alt='name'/>
          </a>
          </li>
          <li className="ms-3">
          <a className="text-white fw-semibold" href="/">
            <img src= {'https://cdn-icons-png.flaticon.com/512/174/174857.png'} height={25} width={25}  alt='name'/>
          </a>
          </li>
          <li className="ms-3">
          <a className="text-white fw-semibold" href="/">
            <img src= {'https://cdn-icons-png.flaticon.com/512/5968/5968830.png'} height={25} width={25}  alt='name'/>
          </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer