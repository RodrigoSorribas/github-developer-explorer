import React from "react";

function RepoItem({repoName, description, language, stars}){
    return(
        <>
            <p>Name: {repoName}</p>
            {description ? <p>Description: {description}</p> : <p>Description: This repo has no description</p>}
            {language ? <p>Language: {language}</p> : <p>Language: This repo has no language(Probably an empty repo)</p> }
            <p>Stars: {stars}</p>
            <br/>
        </>
    )
}

export default RepoItem;