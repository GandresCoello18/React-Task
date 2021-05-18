import React, { useEffect, useState } from 'react'
import { CommentPost } from '../components/commetPost'
import { useParams } from 'react-router-dom'
import { GetOnlyPost } from '../api/post'
import { GetCommentPost } from '../api/comment';
import { Row, Col } from 'antd'

const CommentPostView = () => {
    const params = useParams()
    const [Comment, setComment] = useState([])
    const [Post, setPost] = useState()

    useEffect(() => {
        const fetchCommnet = async () => {
            try {
                const comment = await (await GetCommentPost(params.idPost)).data
                setComment(comment)

                const post = await (await GetOnlyPost(params.idPost)).data
                setPost(post[0])
            } catch (error) {
                console.log(error.message)
            }
        }

        params.idPost && fetchCommnet()
    }, [params])
    return (
        <>
            <h2 style={{ textAlign: 'center', padding: 10, marginBottom: 10, fontSize: 35 }}>Comentario de: <strong>{Post?.title}</strong></h2>
            <Row justify="center">
                {Comment.map(item => (
                    <Col xs={24} md={13}>
                        <CommentPost key={item.id} name={item.name} body={item.body} email={item.email} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CommentPostView