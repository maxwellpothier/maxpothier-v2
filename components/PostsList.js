import { posts } from "../data/posts";
import AlbumCard from "./AlbumCard";

import styles from "./postsList.module.scss";

const PostsList = () => {
    const recentPosts = posts.map((post, i) => {
        return (
            <AlbumCard album={post} key={i}/>
        );
    })

    return (
        <div className={styles.postsListContainer}>
            {recentPosts}
        </div>
    );
};

export default PostsList;