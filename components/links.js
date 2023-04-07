import Link from "next/link"
import styles from '../styles/links.module.css'

const Links = ({ text, href }) => {
    return (
        <>
            <Link
                href={href}
                legacyBehavior>
                <a className={styles.link}>
                    {text}
                </a>
            </Link>
        </>

    )

}

export default Links