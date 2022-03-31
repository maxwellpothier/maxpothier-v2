import ReviewParagraph from "./ReviewParagraph";
import Image from "next/image";

import styles from "./reviewContent.module.scss";

const ReviewContent = ({ albumCover, albumRating }) => {
    return (
        <div className={styles.reviewContentContainer}>
            <div className={styles.reviewContentCover}>
                <Image
                        src={albumCover}
                        alt={"Test Photo"}
                        width={200}
                        height={200}
                />
            </div>
            <div className={styles.reviewContentText}>
                <ReviewParagraph/>
            </div>
            <div className={styles.reviewContentGrade}>
                <span className={styles.reviewContentGradeText}>{albumRating}</span>
            </div>
        </div>
    );
};

export default ReviewContent;