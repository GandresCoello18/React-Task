import React, {useEffect, useState} from 'react'
import { List } from 'antd';
import { ItemUser } from '../components/ItemUser'
import { GetUsers } from '../api/users'

const ViewUser = () => {
    const [Users, setUsers] = useState([])
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
        'Los Angeles battles huge wildfires.',
      ]

      useEffect(() => {
        const fetchUser = async () => {
            try {
                const users = await (await GetUsers()).data
                setUsers(users)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchUser()
      },[])

    return (
        <List
            header={<div>Lista de usuarios</div>}
            bordered
            dataSource={Users}
            renderItem={item => <ItemUser userName={item.username} email={item.email} key={item.id}  />}
        />
    )
}

export default ViewUser