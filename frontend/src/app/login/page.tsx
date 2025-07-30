"use client";

import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:1337/api/auth/local", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier: email,
                    password: password,
                }),
            });

            const data = await res.json();

            if (data.jwt) {
                console.log("Login successful:", data);
            } else {
                setError(data?.error?.message || "Login failed.");
            }
        } catch (err) {
            console.error(err);
            setError("An unexpected error occurred.");
        }
    }

    return (
        <div className={styles["login-page-wrapper"]}>
            <div className={styles["login-container"]}>
                <div className={styles["form-wrapper"]}>
                    <h1 className={styles["form-title"]}>Sign in to LigaPlayfest</h1>
                    <p className={styles["form-subtitle"]}>Please sign in to start your Liga journey</p>

                    <form onSubmit={handleLogin} className={styles["form-container"]}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button className={styles["login-btn"]} type="submit">Sign in</button>
                    </form>
                </div>

                {/*    Dont have an account? Sign Up*/}
                <p className={styles["signup-text"]}>
                    Don&apos;t have an account? {" "}
                    <a href="/signup" className={styles["signup-link"]}>Sign Up</a>
                </p>
            </div>
        </div>
    )
}