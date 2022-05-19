import fetch from 'node-fetch';

export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {

            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const favourites = (favourites) => {
    return fetch('/api/users/favourites', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ favourites: favourites })
    }).then(res => res.json())
};

export const rated = (rated) => {
    return fetch('/api/users/rated', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ rated: rated })
    }).then(res => res.json())
};