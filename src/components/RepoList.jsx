import React from "react";
import RepoItem from "./RepoItem";

function RepoList({repoInfo}){
    return(
        <>
            {repoInfo.map((repo) => {
                return(
                    <RepoItem 
                    repoName={repo.name} 
                    description={repo.description}
                    language={repo.language}
                    stars={repo.stargazers_count}/>
                )})}
        </>
    )
}

export default RepoList;