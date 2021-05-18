import { api } from '.'

export const GetCommentPost = async (postId) => {
    const response = await api({
        url:`/comments?postId=${postId}`,
        method: 'GET'
    })

    return response
}