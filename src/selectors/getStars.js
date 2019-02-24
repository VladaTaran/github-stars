export function getStars(userItem) {
    return fetch(`https://api.github.com/users/${userItem.login}/starred`)
    .then(res => {
        if(!res.ok) {
            throw new Error("Error to get starred api for " + userItem)
        }
        return res;
    })
    .then(res => res.json())
    .then(usersRepos => {
        return usersRepos.map(repo=>repo.stargazers_count).reduce((a,b) => a+b, 0)
    })
    .catch(e => 0)
};