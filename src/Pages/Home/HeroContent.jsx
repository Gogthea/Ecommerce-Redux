import React from 'react';
import {Row, Col, Image} from 'antd';

export default function Herocontent 
() {
  return (
   
        <div>
            <Row justify='center'>
                <Col span={22} className='hero' >
                    <h1 className='heroContent'>
                        50%
                        <span>OFF</span>
                    </h1>
                    
                    

                    <Image 
                    preview={false}
                    className='ImageBlock'
                    

                     src='https://imgs.search.brave.com/UMPcGbHeeTUV3S106q0hSORRBNREB_tCJcyDMGRnaEA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2IvZi9iLzc1/NTM1My1nb3JnZXJv/dXMtaGFtYnVyZ2Vy/LXdhbGxwYXBlcnMt/MTkyMHgxMjgwLWhk/LTEwODBwLmpwZw'/>
                    
                </Col>
            </Row>
            

        </div>
  
    )

   
    
}
