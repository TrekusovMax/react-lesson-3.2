import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userID) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userID))
  }

  const handleToggleBookMark = (id) => {
    const newState = users.map((user) => {
      if (user._id === id) {
        user.favorite = !user.favorite
      }
      return user
    })
    setUsers(newState)
  }

  return (
    <div className="container my-2">
      <SearchStatus length={users.length} />

      {users.length > 0 && (
        <Users
          users={users}
          handleDelete={handleDelete}
          handleToggleBookMark={handleToggleBookMark}
        />
      )}
    </div>
  )
}

export default App
