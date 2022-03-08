import { posts } from "../data/posts";
import AlbumCard from "./AlbumCard";

import styles from "./postsList.module.scss";

const PostsList = () => {
    const allPosts = posts.map((post, i) => {
        return (
            <AlbumCard album={post} key={i}/>
        );
    })

    return (
        <div className={styles.postsListContainer}>
            {allPosts}
        </div>
    );
};

export default PostsList;