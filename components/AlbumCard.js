import Image from "next/image";
import Link from "next/link";

import styles from "./albumCard.module.scss";

const AlbumCard = ({album}) => {
    return (
        <Link href={`/posts/${album.slug}`} passHref>
            <div className={styles.albumCardContainer}>
                <div className={styles.albumCardImage}>
                    <Image
                        src={album.url}
                        alt={album.title}
                        width={200}
                        height={200}
                    />
                </div>
                <span className={styles.albumCardTitle}>{album.title}</span>
                <span className={styles.albumCardArtist}>{album.artist}</span>
                {/* <button className={styles.albumCardButton}>Read More</button> */}
            </div>
        </Link>
    );
};

export default AlbumCard;
