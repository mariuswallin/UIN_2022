// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
import './styles/css/main.css'
import ReactDOM from 'react-dom'

// TODO: Kommenter ut om du ønsker å bruke .scss
// import './styles/scss/main.scss'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
