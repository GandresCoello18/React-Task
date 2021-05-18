import React from 'react'
import { CommentPost } from '../components/commetPost'
import { Row, Col } from 'antd'

const CommentPostView = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center', padding: 10, marginBottom: 10, fontSize: 35 }}>Comentario de: <strong>test</strong></h2>
            <Row justify="center">
                {[0,1 ,2,3 ,4 ,5].map(item => (
                    <Col xs={24} md={13}>
                        <CommentPost key={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CommentPostView