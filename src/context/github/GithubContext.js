import { createContext, useState } from "react";

const GithubContext = createContext();

const url = "https://api.github.com/users";


export const GithubProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }

    return <GithubContext.Provider value={{
        users, loading, fetchUsers
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext;