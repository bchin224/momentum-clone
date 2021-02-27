import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Quote = () => {
  const [quoteText, setQuoteText] = useState('')
  const [quoteAuthor, setQuoteAuthor] = useState('')

  const fetchQuote = () => {
    axios({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
      method: 'GET'
    })
    .then(res => console.log('This is quote data:', res))
    .then(res => setQuoteText(res))
    .then(res => setQuoteAuthor(res))
    .catch(console.log('Failed to get quote'))
  }

  useEffect(() => {
    console.log('fetching quote', quoteText, quoteAuthor)
    fetchQuote()
  })

  return (
    <div>
      Random quote goes here
      <p id="quote-text">{quoteText} -{quoteAuthor}</p>
    </div>
  )
}

export default Quote
