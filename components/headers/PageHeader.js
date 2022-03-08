import styles from "./pageHeader.module.scss";

const PageHeader = ({title, subtitle}) => {
    return (
        <div className={styles.pageHeaderContainer}>
            <span className={styles.pageHeaderTitle}>{title}</span>
            <span className={styles.pageHeaderSubtitle}>{subtitle}</span>
        </div>
    );
};

export default PageHeader;