import PageHeader from "./headers/PageHeader";

import styles from "./reviewContent.module.scss";

const ReviewContent = () => {
    return (
        <div className={styles.reviewContentContainter}>
            <div className={styles.reviewContentInfo}>
            </div>
            <div className={styles.reviewContentText}>
            </div>
        </div>
    );
};

export default ReviewContent;