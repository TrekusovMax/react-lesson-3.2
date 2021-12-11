import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  handleDelete,
  handleToggleBookMark,
  favorite,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((q) => (
          <Qualitie name={q.name} color={q.color} key={q._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark
          status={favorite}
          handleToggleBookMark={() => handleToggleBookMark(_id)}
        />
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  )
}

export default User
