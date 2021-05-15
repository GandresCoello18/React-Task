import React from 'react'
import { List } from 'antd';
import { useSelector } from 'react-redux'
import { ItemUser } from '../components/ItemUser'

const ViewUser = () => {
    const { users } = useSelector(state => state.UserReducer)
    return (
        <List
            header={<div>Lista de usuarios</div>}
            bordered
            dataSource={users}
            renderItem={item => <ItemUser userName={item.username} email={item.email} key={item.id}  />}
        />
    )
}

export default ViewUser