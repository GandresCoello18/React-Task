import React, { useEffect, useState } from 'react'
import { CardPost } from '../components/CardPost'
import { useParams } from 'react-router-dom'
import { Row, Col, Spin } from 'antd';
import { useSelector } from 'react-redux'
import { GetPost } from '../api/post'
import { DiscriptionUser } from '../components/DescriptionUser'

const PostView = () => {
    const [Post, SetPost] = useState([])
    const [Loading, setLoading] = useState(false)
    const params = useParams()
    const [User, setUser] = useState(undefined)

    const { users } = useSelector(state => state.UserReducer)

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)

            try {
                const post = await (await GetPost(params.idUser)).data
                SetPost(post)

                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setLoading(false)
            }
        }

        fetchPost()

        const findUser = users.find(item => item.id == params.idUser)
        setUser(findUser)
    }, [params, users])

    return (
        <>
            <h2 style={{ textAlign: 'center', padding: 10, marginBottom: 10, fontSize: 35 }}>Detalles del usuario</h2>
            <Row justify="center">
                <Col xs={24} md={10}>
                    <DiscriptionUser User={User} />
                </Col>
            </Row>
            <h2 style={{ textAlign: 'center', padding: 10, marginBottom: 10, marginTop: 10, fontSize: 35 }}>Post</h2>
            {Loading ? <Spin size="large" /> : (
                <Row justify="space-around">
                    {Post.map(item => (
                        <Col>
                            <CardPost title={item.title} body={item.body} key={item.id} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}
export default PostView