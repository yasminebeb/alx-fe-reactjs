import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUser(null);

        try {
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
                    <p>Name: {user.name || "No name available"}</p>
                    <p>Username: {user.login}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        Visit GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
