import { api } from '.'

export const GetPost = async (idUser) => {
    const response = await api({
        url:`/posts?userId=${idUser}`,
        method: 'GET'
    })

    return response
}