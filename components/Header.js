import {FaSpotify, FaGithub, FaTwitter} from 'react-icons/fa';

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <span className={styles.headerLogo}>What's Turning?</span>
            <ul className={styles.headerSocialIcons}>
                <a href="https://open.spotify.com/user/bg8527p8wb1nrpb6r8xf662r2?si=a32cb6c1e3214d3a" target={"_blank"}>
                    <FaSpotify className={styles.headerIcon}/>
                </a>
                <a href="https://github.com/maxwellpothier" target={"_blank"}>
                    <FaGithub className={styles.headerIcon}/>
                </a>
                <a href="https://twitter.com/MaxPothier" target={"_blank"}>
                    <FaTwitter className={styles.headerIcon}/>
                </a>
            </ul>
        </div>
    );
};

export default Header;