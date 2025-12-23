import React from "react";
import RepoItem from "./RepoItem";
import styles from "../styles/RepoList.module.css";

function RepoList({repoInfo}){
    return(
        <>
            {repoInfo.map((repo) => {
                return(
                    <RepoItem className={styles.list}
                    repoName={repo.name} 
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stargazers_count}/>
                )})}
        </>
    )
}

export default RepoList;