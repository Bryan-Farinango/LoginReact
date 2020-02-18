
const getUsersApi = async () => {
    const data = await fetch('http://localhost:8000/api/users.json');
    return await data.json();
};

const Users = {
    getUsersApi
};

export default Users;