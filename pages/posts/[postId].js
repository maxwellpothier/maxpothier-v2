import PropTypes from "prop-types";
import Header from "../../components/headers/Header";
import WaveBackground from "../../components/WaveBackground";
import PageHeader from "../../components/headers/PageHeader";
import ReviewContent from "../../components/ReviewContent";
import { posts } from "../../data/posts";

export const getStaticPaths = async () => {
    const paths = posts.map((post) => ({
        params: {
            postId: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const currentAlbum = posts.filter(post => {
        return post.slug === params.postId
    });

    return {
        props: {
            postAlbum: currentAlbum
        },
    };
};

const PostTemplate = ({ postAlbum }) => {
    return (
        <div>
            <Header/>
			<WaveBackground/>
            <PageHeader
                title={postAlbum[0].title}
                subtitle={postAlbum[0].artist}
            />
            <ReviewContent
                albumCover={postAlbum[0].url}
                albumRating={postAlbum[0].rating}
            />
        </div>
    );
};

PostTemplate.propTypes = {
	postAlbum: PropTypes.object.isRequired,
}

export default PostTemplate;
