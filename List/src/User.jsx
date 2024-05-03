import React from 'react'

function User({e}) {
  return (
    <div>
      <li>
        <p>{e.name}</p>
        <p>{e.department}</p>
        <p>{e.role}</p>
      </li>
    </div>
  )
}

export default User
