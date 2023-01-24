import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import viewProductsDetailsHook from '../../hook/products/view-products_details-hook';


function ProductText() {


  const {id} = useParams();
  const [item, images, cat] = viewProductsDetailsHook(id);

  return (
     <div>
     <Row className="mt-2">
       <div className="cat-text">{cat.name}: </div>
     </Row>
     <Row>
       <Col md="8">
         <div className="cat-title d-inline">
         {item.title} 
         <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
         </div>
       </Col>
     </Row>
     <Row>
       <Col md="8" className="mt-4">
         <div className="cat-text d-inline">{} :</div>
         <div className="barnd-text d-inline mx-1">Samsung </div>
       </Col>
     </Row>
     <Row>
       <Col md="8" className="mt-1 d-flex">
         <div
           className="color ms-2 border"
           style={{ backgroundColor: "#E52C2C" }}></div>
         <div
           className="color ms-2 border "
           style={{ backgroundColor: "white" }}></div>
         <div
           className="color ms-2 border"
           style={{ backgroundColor: "black" }}></div>
       </Col>
     </Row>

     <Row className="mt-4">
       <div className="cat-text">Features :</div>
     </Row>
     <Row className="mt-2">
       <Col md="10">
         <div className="product-description d-inline">
           يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
           هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة،
           وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة
           الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف
           الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير
           الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك
           العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة
           تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق
           الخلفية غير الواضح نظرة عامة
         </div>
       </Col>
     </Row>
     <Row className="mt-4">
       <Col md="12">
         <div className="product-price d-inline px-3 py-3 border">$ 34000</div>
         <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to Cart</div>
       </Col>
     </Row>
   </div>
  )
}

export default ProductText