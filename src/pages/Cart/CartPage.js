import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from '../../components/Cart/CartCheckout'
import CartItem from '../../components/Cart/CartItem'

function CartPage() {
  return (
    <Container style={{minHeight: '670px'}}>
          <Row>
               <div className='cart-title mt-4'>Basket</div>
          </Row>
          <Row className='d-flex justify-content-center'>
               <Col xs="12" md="9">
                    <CartItem />
                    <CartItem />
               </Col>
               <Col xs="6" md="3">
                    <CartCheckout />
               </Col>
          </Row>
    </Container>
  )
}

export default CartPage