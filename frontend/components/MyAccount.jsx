import React from 'react'
import Quiz from './QuizPreview'
function MyAccount({user,error}) {
  if(!user) return null
  return (
    <>
    <div className="my-account">
        <div className="my-account-left">
              <div className="square">&nbsp;</div><br />
              <p>{user.first_name}</p>
              <p>{user.first_name} {user.second_name}</p>
              <p>{user.email}</p>
              <p>Created: {new Date(user.birth_date).toDateString()} </p>
              {/* <button>Edit profile</button> */}
        </div>
        <div className="my-account-right">
        
        {/* user activity if it exists  */}
        <p>There is no other activity !</p>
        {/* <p>Total completed: 12345</p>
        <ul>
          <li>Quiz: 30</li>
          <li>Flash cards: 40</li>
          <li>Memory cards: 40</li>
        </ul> */}


        </div>
            {/* <div className="bg-black rounded-full">123</div> */}
{/* 
             <h3>Hello {user.first_name}</h3>
             <div>
                First name: {user.first_name} <br />
                Second name: {user.second_name} <br />
                Email: {user.email} <br />
                With us since: {new Date(user.birth_date).toDateString()} <br />
                <button className=''>SAVE</button>
             </div> */}
        
       
       
    </div>
    
    </>
  )
}

export default MyAccount