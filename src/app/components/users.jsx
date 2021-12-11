import React from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.map((user) => (
        <User
          key={user._id}
          qualities={user.qualities}
          _id={user._id}
          name={user.name}
          profession={user.profession}
          completedMeetings={user.completedMeetings}
          rate={user.rate}
          handleDelete={rest.onDelete}
          handleToggleBookMark={rest.onToggle}
          favorite={user.favorite}
        />
      ))}
    </>
  )
}

export default Users
