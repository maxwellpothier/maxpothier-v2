import Header from "../../components/headers/Header";
import WaveBackground from "../../components/WaveBackground";
import PageHeader from "../../components/headers/PageHeader";
import ReviewContent from "../../components/ReviewContent";

const PostTemplate = () => {
    return (
        <div>
            <Header/>
			<WaveBackground/>
            <PageHeader title={"Room on Fire"} subtitle={"The Strokes"}/>
            <ReviewContent/>
        </div>
    );
};

export default PostTemplate;