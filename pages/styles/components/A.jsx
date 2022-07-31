import Link from "next/dist/client/link";
import styles from '../index.module.scss';

export default function A({text, href}) {
  return (
    <Link  href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
}
