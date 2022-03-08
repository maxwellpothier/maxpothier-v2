import Link from "next/link";

const FirstPost = () => {
    return (
        <div>
            First Post
            <h1>
				<Link href={"/"}>
					<a>Link to the Home Page</a>
				</Link>
			</h1>
        </div>
    );
};

export default FirstPost;