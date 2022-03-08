import Header from "../components/Header";
import WaveBackground from "../components/WaveBackground";

import styles from "./index.module.scss";

const HomePage = () => {
  	return (
    	<div className={styles.indexContainer}>
			<Header/>
			<WaveBackground/>
			<div className={styles.indexDescriptionBox}>
				<span>Description Here</span>
			</div>
		</div>
  	);
};

export default HomePage;