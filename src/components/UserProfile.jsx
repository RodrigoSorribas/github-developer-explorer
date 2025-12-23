import React from "react";
import RepoList from "./RepoList";
import styles from "../styles/UserProfile.module.css";

function UserProfile({avatar, name, bio, followers, following, repos, handleToggle, showRepos, repoInfo}){

    return(
        <>  
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar} />
                <p className={styles.name}>{name}</p>
                {bio ? <p className={styles.bio}>About: {bio}</p> : <p className={styles.bio}>This user does not have a bio</p>}
                <p className={styles.stats}>Followers: {followers}</p>
                <p className={styles.stats}>Following: {following}</p>
                <p className={styles.stats}>Public Repos Count: {repos}</p>
                <button onClick={handleToggle}>{showRepos ? "Hide Info" : "Show Info"}</button>
                {showRepos ? <RepoList repoInfo={repoInfo}/> : null}
            </div>
            
        </>
    )
}

export default UserProfile;