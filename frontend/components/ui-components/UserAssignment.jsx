import React from 'react'

function UserAssignment({title,description}) {
  return (
        <div className="user-assignment">
                <div className="assignment-text">
                <h6>{title}</h6>
                <span>{description}</span>
              </div>
              
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
  )
}

export default UserAssignment