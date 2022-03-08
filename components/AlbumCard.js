import Image from "next/image";

import styles from "./albumCard.module.scss";

const AlbumCard = ({album}) => {
    return (
        <div className={styles.albumCardContainer}>
            <Image
                className={styles.albumCardImage}
                src={album.url}
                alt={album.title}
                width={200}
                height={200}
            />
            {album.title}
            {album.artist}
        </div>
    );
};

export default AlbumCard;