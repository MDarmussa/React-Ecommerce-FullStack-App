import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { createReview, deleteReviewOnProduct } from './../../redux/actions/reviewAction';


function DeleteRateHook(review) {

     const dispatch = useDispatch();
     const navigate = useNavigate()

     const [isUser, setIsUser] = useState(false)
     const [loading, setLoading] = useState(true)
     const [showDelete, setShowDelete] = useState(false);
     const handleClose = () => setShowDelete(false);
     const handleShow = () => setShowDelete(true);

     let user = JSON.parse(localStorage.getItem("user"))

     useEffect(() => {
          if(review.user._id === user._id)
               {
                    setIsUser(true);
               }
     }, [])

     const handleDelete = async () => {
          setLoading(true)
          await dispatch(deleteReviewOnProduct(review._id))
          setLoading(false)
          handleClose();
     }

     const res = useSelector(state => state.reviewReducer.deleteReview)

     useEffect(() => {
          if(loading === false)
               if(res === "") {
                    notify("Review Deleted Successfully", "success")
                    setTimeout(() => {
                         window.location.reload(false) //refresh the page after deleting the review
                    }, 1000)
               } else {
                    notify("There is a Problem in deleting the review", "error")
               }
     }, [loading])



     return [isUser, handleDelete, handleShow, handleClose, showDelete]


     
}

export default DeleteRateHook