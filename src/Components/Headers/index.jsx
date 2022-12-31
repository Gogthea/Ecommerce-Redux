import React from 'react';
import {Menu, Row, Col, Button, } from 'antd';
import { HomeFilled,LoginOutlined, UserAddOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import handleCart from '../../Redux/Reducere/handleCart';


export default function Headers() {
    const Nav = useNavigate();
    const onMenuclick = (items)=>{
        Nav(`/${items.key}`)

    }

    const state = useSelector((state)=> state.handleCart)
    




  return (
    <div className='Headers'>
        <Row>
            <Col span={8}>
                <Link to='/'>
                <h1 className='logo'>Dailo Ordering System</h1>

                </Link>
                

            </Col>
            <Col span={8}>
            <Menu
        onClick={onMenuclick}
        className='HeadersMenu'
        mode='horizontal'
        items={[
            {
                label:<HomeFilled/>,
                key:''
            },
            {
                label:'About',
                key:'about'
            },
            {
                label:'Products',
                key:'products'
            },
            {
                label:'Contact',
                key:'contact'
            }
        ]}
        >
        </Menu>

            </Col>
            <Col className='button' span={8}>
                
                <Button><LoginOutlined/>Login</Button>
                <Button><UserAddOutlined/>Register</Button>
                <Button><ShoppingCartOutlined/>Cart({state.length})</Button>

            </Col>
        </Row>

        

    </div>
  )
}
