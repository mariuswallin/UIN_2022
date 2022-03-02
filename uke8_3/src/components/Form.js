import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const navigate = useNavigate()
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const addComment = (event) => {
    event.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
      navigate('/produkter')
    }, 2000)
    // console.log(comment)
  }

  return (
    <form method="POST" onSubmit={addComment}>
      <h2>Legg igjen en kommentar</h2>
      <label htmlFor="comment">
        Kommentar
        <textarea
          id="comment"
          name="comment"
          cols={15}
          rows={5}
          onChange={handleCommentChange}
          value={comment}
        />
      </label>
      <button type="submit">{loading ? 'Sender ...' : 'Send'}</button>
      {success ? <p>Kommentar sendt</p> : null}
    </form>
  )
}
