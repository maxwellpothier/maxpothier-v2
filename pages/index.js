import Header from "../components/headers/Header";
import WaveBackground from "../components/WaveBackground";
import PageHeader from "../components/headers/PageHeader";
import PostsList from "../components/PostsList";
import Link from "next/link";

const HomePage = () => {
  	return (
    	<>
			<Header/>
			<WaveBackground/>
			<PageHeader title={"Blog"} subtitle={"Recent Posts"}/>
			<PostsList/>
			<Link href={"./posts/post-template"}>
				<a>Post Template</a>
			</Link>
		</>
  	);
};

export default HomePage;