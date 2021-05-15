import { api } from '.'

export const GetUsers = async () => {
    const response = await api({
        url: '/users',
        method: 'GET'
    })

    return response
}