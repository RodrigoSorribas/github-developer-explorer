import React from "react";
import RepoList from "./RepoList";

function UserProfile({avatar, name, bio, followers, following, repos, handleToggle, showRepos, repoInfo}){

    return(
        <>
            <img src={avatar} />
            <p>{name}</p>
            {bio ? <p>About: {bio}</p> : <p>This user does not have a bio</p>}
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            <p>Public Repos Count: {repos}</p>
            <button onClick={handleToggle}>{showRepos ? "Hide Info" : "Show Info"}</button>
            {showRepos ? <RepoList repoInfo={repoInfo}/> : null}
        </>
    )
}

export default UserProfile;