import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

const githubAPI = 'https://api.github.com/users/Gabriel-sn/repos';

export function RepositoryList () {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => { 
        fetch(githubAPI)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Repositórios</h1>

            <ul>
               {
                   repositories.map(repository => {
                       return <RepositoryItem repository={repository} key={repository.full_name}/>
                   })
               }
            </ul>
        </section>
    )
}