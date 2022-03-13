import {FaSpotify, FaGithub, FaTwitter} from 'react-icons/fa';

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <span className={styles.headerLogo}>What&apos;s Turning?</span>
            <span className={styles.headerLogoMobile}>WT?</span>
            <ul className={styles.headerSocialIcons}>
                <a href="https://open.spotify.com/user/bg8527p8wb1nrpb6r8xf662r2?si=a32cb6c1e3214d3a" target={"_blank"} rel={"noreferrer"}>
                    <FaSpotify className={styles.headerIcon}/>
                </a>
                <a href="https://github.com/maxwellpothier" target={"_blank"} rel={"noreferrer"}>
                    <FaGithub className={styles.headerIcon}/>
                </a>
                <a href="https://twitter.com/MaxPothier" target={"_blank"} rel={"noreferrer"}>
                    <FaTwitter className={styles.headerIcon}/>
                </a>
            </ul>
        </div>
    );
};

export default Header;