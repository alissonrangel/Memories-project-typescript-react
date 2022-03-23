import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { useSelector } from "react-redux"

import Post from "./Post"
import useStyles from "./styles"

type Props = {
  setCurrentId: (id: number) => void;
}

const Posts = ({ setCurrentId }: Props) => {
    const posts = useSelector((state: any) => state.posts)
    const classes = useStyles()

    return (
        !posts.length ? (<CircularProgress />) : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {posts.map((post: any) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts