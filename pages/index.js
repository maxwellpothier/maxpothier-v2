import Header from "../components/headers/Header";
import WaveBackground from "../components/WaveBackground";
import PageHeader from "../components/headers/PageHeader";
import PostsList from "../components/PostsList";

import styles from "./index.module.scss";

const HomePage = () => {
  	return (
    	<div className={styles.indexContainer}>
			<Header/>
			<WaveBackground/>
			<PageHeader title={"Blog"} subtitle={"Recent Posts"}/>
			<PostsList/>
		</div>
  	);
};

export default HomePage;