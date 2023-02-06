import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddUserAddressHook from '../../hook/user/add-address-hook'

function UserAddAddress() {
     const [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit] = AddUserAddressHook()
  return (
     <div>
          <Row className="justify-content-start ">
          <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
               <Col sm="8">
                    <input
                    value={alias}
                    onChange={onChangeAlias}
                         type="text"
                         className="input-form d-block mt-3 px-3"
                         placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                    />
                    <textarea
                    value={details}
                    onChange={onChangeDetails}
                         className="input-form-area p-2 mt-3"
                         rows="4"
                         cols="50"
                         placeholder="العنوان بالتفصيل"
                    />
                    <input
                    value={phone}
                    onChange={onChangePhone}
                         type="text"
                         className="input-form d-block mt-3 px-3"
                         placeholder="رقم الهاتف"
                    />
               </Col>
          </Row>
          <Row>
               <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={onSubmit} className="btn-save d-inline mt-2 ">اضافة عنوان</button>
               </Col>
          </Row>
          <ToastContainer />
     </div>
  )
}

export default UserAddAddress