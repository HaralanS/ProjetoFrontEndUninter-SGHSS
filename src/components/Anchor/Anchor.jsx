import styles from './Anchor.module.css'

export default function Anchor({href, label}) {
    return (
        <>
            <a href={href} className={styles.anchorAtom} target="_blank" rel="noreferrer">{label}</a>
        </>
    )
}