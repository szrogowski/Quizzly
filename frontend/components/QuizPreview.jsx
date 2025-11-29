import React from 'react'

function QuizPreview({title,description}) {
  return (
    <div className='quiz-preview-card'>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default QuizPreview