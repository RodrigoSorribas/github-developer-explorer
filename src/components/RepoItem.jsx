import React from "react";
import styles from "../styles/RepoItem.module.css";

function RepoItem({repoName, description, language, stars}){
    return(
        <>
            <div className={styles.card}>
                <p className={styles.name}>Name: {repoName}</p>
                {description ? <p className={styles.description}>Description: {description}</p> : <p>Description: This repo has no description</p>}
                {language ? <p className={styles.meta}>Language: {language}</p> : <p className={styles.meta}>Language: This repo has no language(Probably an empty repo)</p> }
                <p className={styles.meta}>Stars: {stars}</p>
                <br/>
            </div>
        </>
    )
}

export default RepoItem;