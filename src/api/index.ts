import axios from "axios"


type Post = {
  title: string,
  message: string,
  creator: string,
  tags: string[],
  selectedFile: string,
  likeCount?: number,
  createdAt?: Date
}

const url = "http://localhost:5000/posts"

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost: Post) => axios.post(url, newPost)
export const likePost = (id: number) => axios.patch(`${url}/${id}/likePost`)
export const updatePost = (id: number, updatedPost: Post) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id: number) => axios.delete(`${url}/${id}`)