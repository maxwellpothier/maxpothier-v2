import ReviewParagraph from "./ReviewParagraph";
import Image from "next/image";

import styles from "./reviewContent.module.scss";

const ReviewContent = () => {
    return (
        <div className={styles.reviewContentContainter}>
            <div className={styles.reviewContentCover}>
                <Image
                        src={"https://i.scdn.co/image/ab67616d00001e02932b996af72dfeaf5a72ef58"}
                        alt={"Test Photo"}
                        width={200}
                        height={200}
                />
            </div>
            <div className={styles.reviewContentText}>
                <ReviewParagraph/>
            </div>
            <div className={styles.reviewContentGrade}>
                <span>9.2</span>
            </div>
        </div>
    );
};

export default ReviewContent;