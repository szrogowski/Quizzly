import React from 'react'
import QuizPreview from './QuizPreview'
function QuizGroup() {
  return (
    <div className='quiz-group'>
        <QuizPreview title='kutas' description='quiz o kutasie'/>
        <QuizPreview title='hiszpania' description='quiz o hiszpanii'/>
        <QuizPreview/>
    </div>
  )
}

export default QuizGroup