import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();




export const GithubProvider = ({ children }) => {


    //useState method
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);


    //userReducer method
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //getusers async funtion which get call on search input
    const fetchUsers = async (text) => {

        const params = new URLSearchParams({ q: text })
        const url = `https://api.github.com/search/users?${params}`;

        setLoading();

        const response = await fetch(url);
        const { items } = await response.json();
        // setUsers(data);
        // setLoading(false);
        console.log({ items })
        dispatch({
            type: "GET_USERS",
            payload: items,
        })
    }

    //get single user onclick
    const getUser = async (login) => {
        setLoading();

        const userUrl = `https://api.github.com/users/${login}`;

        const response = await fetch(userUrl);

        if (response.status === 404) {
            window.location = "/notfound"
        }
        else {
            const data = await response.json();
            // setUsers(data);
            // setLoading(false);

            dispatch({
                type: "GET_USER",
                payload: data,
            })
        }
    }


    //clear users
    const clearUsers = () => dispatch({ type: "CLEAR_USERS" })

    //set loading
    const setLoading = () => dispatch({ type: "SET_LOADING" });

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        fetchUsers,
        clearUsers,
        getUser
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext;