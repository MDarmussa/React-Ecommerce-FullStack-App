import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import ProfileHook from '../../hook/user/profile-hook'
import deleteicon from '../../images/delete.png'

function UserProfile() {
    // console.log(JSON.parse(localStorage.getItem("user"))) //print user info - must login first - see login-hook for more info.
    const [user, show, handleClose, handleShow, handleSubmit, name, email, phone, onChangeName, onChangeEmail, onChangePhone, oldPassword, newPassword, confirmPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass, changePassword] = ProfileHook()

    

  return (

     <div>
     <div className="admin-content-text">الصفحه الشخصية</div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><div className='font'>Confirm Edit Your Personal Info!</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="User Name"
                    />
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="Email"
                />
                    <input
                    value={phone}
                    onChange={onChangePhone}
                    type="phone"
                    className="input-form font d-block mt-3 px-3"
                    placeholder="Phone"
                />
                </Modal.Body>
                <Modal.Footer>
                <Button className='font' variant="success" onClick={handleClose}>
                    Close
                </Button>
                <Button className='font' variant="dark" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

     <div className="user-address-card my-3 px-2">
         <Row className="d-flex justify-content-between pt-2">
             <Col xs="6" className="d-flex">
                 <div className="p-2">الاسم:</div>
                 <div className="p-1 item-delete-edit">{user.name}</div>
             </Col>
             <Col xs="6" className="d-flex justify-content-end">
                 <div onClick={handleShow} className="d-flex mx-2">
                     <img
                         alt=""
                         className="ms-1 mt-2"
                         src={deleteicon}
                         height="17px"
                         width="15px"
                     />
                     <p className="item-delete-edit"> تعديل</p>
                 </div>
             </Col>
         </Row>

         <Row className="">
             <Col xs="12" className="d-flex">
                 <div className="p-2">رقم الهاتف:</div>
                 <div className="p-1 item-delete-edit">{user.phone}</div>
             </Col>
         </Row>
         <Row className="">
             <Col xs="12" className="d-flex">
                 <div className="p-2">الايميل:</div>
                 <div className="p-1 item-delete-edit">{user.email}</div>
             </Col>
         </Row>



         <Row className="mt-5">
             <Col xs="10" sm="8" md="6" className="">
                 <div className="admin-content-text">تغير كملة المرور</div>
                 <input
                 value={oldPassword}
                 onChange={onChangeOldPass}
                     type="password"
                     className="input-form d-block mt-1 px-3"
                     placeholder="Enter Old Password"
                 />
                 <input
                 value={newPassword}
                 onChange={onChangeNewPass}
                     type="password"
                     className="input-form d-block mt-3 px-3"
                     placeholder="Enter a New Password"
                 />
                 <input
                 value={confirmPassword}
                 onChange={onChangeConfirmPass}
                    type="password"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Confirm the New Password"
                />
             </Col>
         </Row>

         <Row>
             <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                 <button onClick={changePassword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
             </Col>
         </Row>
     </div>
     <ToastContainer />
 </div>
  )
}

export default UserProfile