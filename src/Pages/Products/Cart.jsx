import React from 'react';
import { useSelector } from 'react-redux';
import {Row, Col, Image, Button} from 'antd'

export default function Cart() {
  return (
    <div>
        <>
        <Row justify='center'>
            <Col span={6}>
                <Image src={product.image} alt={product.title}
                height='200px' width='180px'/>

            </Col>
            <Col span={6}>
                <h3>{product.title}</h3>
                <p>{product.qty} X ${product.price} = ${product.qty * product.price}</p>
                <Button onClick={()=>handleButton(product)}>Minus</Button>
                <Button onClick={()=>handleButton(product)}>Plus</Button>

            </Col>
        </Row>
        </>
    </div>
  )
}
