import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import UserProfile from '../components/UserProfile';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function GithubExplorerContainer(){
    const [query, setQuery] = useState('');
    const [user, setUser] = useState('');
    const [repos, setRepos] = useState([]);
    const [showRepos, setShowRepos] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const basePath = "https://api.github.com";

    useEffect(() => {
        if (query === "") return;

        async function fetchUserData(){
            setIsLoading(true);
            const res = await fetch(`${basePath}/users/${query}`);
            if(res.status > 299){
                setError(true);
                setIsLoading(false);
            }
            const data = await res.json();
            setUser(data);
            setIsLoading(false);
        }

        async function fetchUserRepos(){
            setIsLoading(true);
            const res = await fetch(`${basePath}/users/${query}/repos`);
            if(res.status > 299){
                setError(true);
                setIsLoading(false);
            }
            const data = await res.json();
            setRepos(data);
            setIsLoading(false);
        }

        fetchUserData();
        fetchUserRepos();
    }, [query])

    const handleSubmitFromInput = (newValue) => {
        setQuery(newValue);
    }

    const handleToggle = () =>{
        setShowRepos(prev => !prev);
    }

    if(isLoading) return <Loading />

    if(error) return <ErrorMessage/>
    
    return(
        <>
            <h1>Welcome to the Github Developer Explorer!</h1>
            <h2>Search any user you would like to see</h2>
            <SearchBar onSubmit={handleSubmitFromInput} />
            {user ? <UserProfile 
            name={user.name} 
            avatar={user.avatar_url} 
            bio={user.bio} 
            followers={user.followers} 
            following={user.following} 
            repos={user.public_repos} 
            handleToggle={handleToggle} 
            showRepos={showRepos}
            repoInfo={repos} /> : null}
        </>
    )
}

export default GithubExplorerContainer;