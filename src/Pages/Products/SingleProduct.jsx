import React from 'react';
import {useState, useEffect} from 'react';
import {Row, Col, Image, Typography, Rate, Paragraph, Button} from 'antd'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addCart } from '../../Redux/Action';
import Skeleton from 'react-loading-skeleton';


export default function SingleProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);

    const Loading= ()=>{
        return(
            <>
            <Row>
                <Col span={12}>
                    <Skeleton height={400}/>
                </Col>
                <Col span={12}>
                    <Skeleton height={50} width={300} style={{lineHeight:2}}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:'6px'}}/>
                </Col>
            </Row>
            </>
        )
    }

    const ShowProduct = ()=>{
        return(
            <>
            <div className='singleProduct'>
            <Row>
                <Col span={12}>
                    <Image src={product.image} alt={product.title} width="400px" height="400px"/>
                </Col>
                <Col span={12} >
                    <div className='productdes' >
                        <div>
                        <Typography.Text className='ProductCategory'>Category:{product.category}</Typography.Text><br/>
                    <Typography.Text ><b>{product.title}</b></Typography.Text><br/>
                    <span>Rating: {product.rating && product.rating.rate}</span><br/>
                    <Rate allowHalf disabled value={product.rating}/><br/>
                    <Typography.Text className='Price' ><b>Price: ${product.price}</b></Typography.Text><br/>
                    <Typography.Paragraph>{product.description}</Typography.Paragraph><br/>
                    <NavLink to="/cart">
                        <Button>Go To Cart</Button>
                    </NavLink>
                    
                    <Button onClick={()=>addProduct(product)}>Add To Cart</Button>

                        </div>
                    

                    </div>
                    
                </Col>
            </Row>

            </div>
            

            </>
        )
    }




  return (
    <div>
        <Row justify="center">
            <Col span={16}>
                {loading? <Loading/>: <ShowProduct/>}
            </Col>

        </Row>
    </div>
  )
}
