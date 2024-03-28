import axios from './axios'

export async function getAllCorona_detail() {
    const respones=await fetch('http://localhost:4004/Corona_detail')
    const json=await respones.json()
    return json;
}

export function addCorona_detail(newCorona_detail) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newCorona_detail),
    };
    return fetch('http://localhost:4004/Corona_detail', requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })
}
