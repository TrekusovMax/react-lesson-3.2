import React from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User
            key={user._id}
            qualities={user.qualities}
            _id={user._id}
            name={user.name}
            profession={user.profession}
            completedMeetings={user.completedMeetings}
            rate={user.rate}
            handleDelete={rest.handleDelete}
            handleToggleBookMark={rest.handleToggleBookMark}
            favorite={user.favorite}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Users
