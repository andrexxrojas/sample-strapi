'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();

    // Will add auth state (Temporary)
    const isLoggedIn = false;

    return (
        <nav className={styles["nav-bar"]}>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
            <Link href="/games" className={pathname === "/games" ? styles.active : ""}>Games</Link>
            <Link href="/leaderboards" className={pathname === "/leaderboards" ? styles.active : ""}>Leaderboards</Link>

            {isLoggedIn ? (
                <>
                    <Link href="/wallet" className={pathname === "/wallet" ? styles.active : ""}>Wallet</Link>
                    <Link href="/profile" className={pathname === "/profile" ? styles.active : ""}>Profile</Link>
                </>
            ) : (
                <Link href="/login" className={pathname === "/login" ? styles.active : ""}>Login</Link>
            )}
        </nav>
    );
}
