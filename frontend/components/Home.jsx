import React from 'react'
import QuizGroup from './QuizGroup'
import UserAssignment from './ui-components/UserAssignment'
function Home({user,error}) {
  if(!user) return null
  return (
    
    <>
    <div className='user-dashboard'>
      <div className="my-account-left">
              <div className="square">&nbsp;</div><br />
              <p>{user.first_name} {user.second_name}</p>
              
              {/* <button>Edit profile</button> */}
        </div>


        <div className="user-middle">
        <div className="user-greeting">
        <h2>Hi <span className='text-highlight'>{user.first_name}</span></h2>
        Today is: {new Date().toDateString()}
        </div>

        <div className="user-mid">

          <div className="user-assignments">
            <p className='user-header'>Today assignments</p>
            <div className="wrap-assignments">
              <UserAssignment title={'Quiz about mathematics'} description={'DO ALGEBRA'}/>
              <UserAssignment title={'Retake History test'} description={'DO ALGEBRA'}/>
              <UserAssignment title={'Learn Polish using flash cards.'} description={'DO ALGEBRA'}/>
             
              
            </div>
          </div>

          <div className="user-statistics">
            <p className='user-header'>Your statistics</p>
            <div className="wrap-box-stats">
              <div className="box-stats box-v1">
                <h3>10</h3>
                <p>Quizzes completed</p></div>
              <div className="box-stats box-v2">
                <h3>2</h3>
                <p>Assignments missed</p>
              </div>
              <div className="box-stats box-v3">
                <h3>70%</h3>
                <p>Correct answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home