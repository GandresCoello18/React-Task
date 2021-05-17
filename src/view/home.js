import React from 'react'
import { List } from 'antd';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ItemUser } from '../components/ItemUser'

const ViewUser = () => {
    const { users } = useSelector(state => state.UserReducer)
    return (
        <List
            header={<div>Lista de usuarios</div>}
            bordered
            dataSource={users}
            renderItem={item => (
                <Link to={`/post/${item.id}`}>
                    <ItemUser userName={item.username} email={item.email} key={item.id}  />
                </Link>
            )}
        />
    )
}

export default ViewUser