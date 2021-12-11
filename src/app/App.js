import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

function App() {
  const newState = api.users.fetchAll()
  newState.map((user) => (user.favorite = false))

  const [users, setUsers] = useState(newState)

  const handleDelete = (userID) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userID))
  }

  const handleToggleBookMark = (id) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user._id === id) {
          user.favorite = !user.favorite
        }
        return user
      })
    })
  }

  return (
    <>
      <SearchStatus length={users.length} />

      {users.length > 0 && (
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
            <Users
              users={users}
              onDelete={handleDelete}
              onToggle={handleToggleBookMark}
            />
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
