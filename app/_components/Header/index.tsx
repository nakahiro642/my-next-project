import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className={styles.LogoLink}>
                <Image
                    src="/logo.svg"
                    alt="SIMPLE"
                    width={348}
                    height={133}
                    priority
                />
            </a>
        </header>
    );
}