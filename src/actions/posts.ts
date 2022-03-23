import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes"

import * as api from "../api/index"

type Post = {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount?: number,
    createdAt?: Date
}

type Dispatch = {
    dispatch: {
        type: string,
        payload: Post[]
    }
}

export const getPosts = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log((error as Error).message)
    }
}

export const createPost = (post: Post) => async (dispatch: any) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log((error as Error).message)
    }
}

export const updatePost = (id: number, post: Post) => async (dispatch: any) => {
    try {
        const { data } = await api.updatePost(id, post)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log((error as Error).message)
    }
}

export const likePost = (id: number) => async (dispatch: any) => {
    try {
        const { data } = await api.likePost(id)

        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log((error as Error).message)
    }
}

export const deletePost = (id: number) => async (dispatch: any) => {
    try {
        await api.deletePost(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log((error as Error).message)
    }
}
