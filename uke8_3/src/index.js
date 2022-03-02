import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// TODO: Kommenter ut om du ønsker å bruke .scss
import './styles/scss/main.scss'

// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
// import './styles/css/main.css'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
