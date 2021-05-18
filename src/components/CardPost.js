import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom'

export const CardPost = ({ title, body, id }) => {
    return (
        <Card title={title} extra={<Link to={`/commnet/${id}`}>Comentarios</Link>} style={{ width: 300 }}>
            <p>{body}</p>
        </Card>
    )
}