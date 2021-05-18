import React from 'react'
import { Descriptions } from 'antd';

export const DiscriptionUser = ({User}) => {
    return (
        <Descriptions title="User Info">
            <Descriptions.Item label="UserName">{User.username}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{User.phone}</Descriptions.Item>
            <Descriptions.Item label="web site">{User.website}</Descriptions.Item>
            <Descriptions.Item label="email">{User.email}</Descriptions.Item>
            <Descriptions.Item label="Address">
            {User.address.city}
            </Descriptions.Item>
        </Descriptions>
    )
}