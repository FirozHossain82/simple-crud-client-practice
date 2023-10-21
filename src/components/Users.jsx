import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
//   console.log(loadedUser);
  const [users , setUsers] = useState(loadedUser);
  const handleDelete = (_id )=>{
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert("delete successfully")
                const remaining = users.filter((user) => user._id !==_id);
                setUsers(remaining);
            }
        })
  }

  return (
    <div>
      <h3>Total User: {users.length}</h3>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() =>handleDelete(user._id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
