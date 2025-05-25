function getUser() {    //function name
    const body = document.body;   //dom  body ko get kiya hai aur use variable mein store kiya

    let username = prompt("please Enter your gitHub userName");  /// user se data lena 

    if (!username) {    //
        body.innerHTML = "user not found";
    } else {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("user not found");
                }
                return response.json();
            })
            .then((user) => {
                body.innerHTML = `
                <div>
                    <h2>${user.login}</h2>
                    <img src="${user.avatar_url}" alt="${user.login}'s avatar" width="150">
                    <p>Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
                    <p>followers: <a href="${user.followers_url}" target="_blank">${user.followers_url}</a><p/>
                    <p>followers:${user.following_url}<p/>
                    </div>
                    `; })
                    .catch((error) => {
          body.innerHTML = `Error: ${error.message}`;
        });
    }
}

getUser();