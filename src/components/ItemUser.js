import React from 'react'
import { List, Typography } from 'antd';

export const ItemUser = ({ userName, email }) => {
    return (
        <List.Item>
          <Typography.Text mark>[{userName}]</Typography.Text> {email}
        </List.Item>
    )
}