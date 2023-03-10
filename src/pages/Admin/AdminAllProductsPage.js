import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAllProduct from '../../components/Admin/AdminAllProduct'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Pagination from '../../components/Utilities/Pagination'
import ViewhProductAdminHook from '../../hook/admin/view-product-admin-hook'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsPage } from '../../redux/actions/productsAction'

function AdminAllProductPage() {

     const dispatch = useDispatch();

     const [items, pagination, onPress] = ViewhProductAdminHook();
     if(pagination)
          var pageCount = pagination
     else
          pageCount = 0



  return (
    <Container>
          <Row className='py-3'>
               <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
               </Col>
               <Col sm="9" xs="10" md="10">
                    <AdminAllProduct products={items} />
                    {
                         pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />) : null
                    }
               </Col>
          </Row>
    </Container>
  )
}

export default AdminAllProductPage