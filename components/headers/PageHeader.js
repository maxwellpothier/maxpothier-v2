import PropTypes from "prop-types";
import styles from "./pageHeader.module.scss";

const PageHeader = ({title, subtitle}) => {
    return (
        <div className={styles.pageHeaderContainer}>
            <span className={styles.pageHeaderTitle}>{title}</span>
            <span className={styles.pageHeaderSubtitle}>{subtitle}</span>
        </div>
    );
};

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default PageHeader;