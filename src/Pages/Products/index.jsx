import React, { useEffect, useState } from 'react';
import {Row, Col,List, Button, Image, Skeleton} from 'antd';
import { NavLink } from 'react-router-dom';

export default function Products() {
  const [data, setData]=useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading]  = useState(false);
  let componentMounted = true;

  useEffect(()=>{
    const getProducts = async ()=>{
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return ()=>{
        componentMounted= false;
      }
    }
    getProducts();
  },[]);

  const Loading =()=>{
    return (
      <>
      <Row justify='center'>
        <Skeleton height={350}/>
      </Row>
      <Row justify='center'>
        <Skeleton height={350}/>
      </Row>
      <Row justify='center'>
        <Skeleton height={350}/>
      </Row>
      <Row justify='center'>
        <Skeleton height={350}/>
      </Row>
      
      </>
    )
  };

  const filterProduct=(cart)=>{
    console.log(data)
    const updatedList = data.filter((x)=>x.category === cart);
    setFilter(updatedList)
  } 

  const ShowProducts =()=>{
    return (
      <>
      <div className='buttons'>
        <Button onClick={()=>setFilter(data)}>All</Button>
        <Button onClick={()=>filterProduct("men's clothing")}>Men's Clothing</Button>
        <Button onClick={()=>filterProduct("women's clothing")}>Women's Clothing</Button>
        <Button onClick={()=>filterProduct("jewelery")}>Jewelearys</Button>
        <Button onClick={()=>filterProduct("electronics")}>Electronics</Button>
      </div>
      <div className="card">
      {filter.map((product) => {
        return (
          <>
          
            {/* <Row>
              <Col span={8}> */}
                
                  <div className="cardchild">
                    <Image width={100} src={product.image} />
                    <h1>{product.title}</h1>
                    <h3>${product.price}</h3>
                    <NavLink to={`/products/${product.id}`}>
                    <Button>Buy Now</Button>
                    </NavLink>
                  </div>
                
              {/* </Col>
            </Row> */}
           
          </>
        );

      })}
      </div>
      
      </>
    )
  }



  return (
    <>
    <h2 style={{marginTop:'50px', fontSize:'30px'}}>Latest Products</h2>
    <hr style={{width:'92%'}}/>

    <div className='CategoryButton'>
      <Row justify='center'>
        <Col span={22}>
          {loading ? <Loading/> : <ShowProducts/>}
        </Col>

      </Row>

    </div>
    </>
    
  )
}
