import Navbar from './components/Navbar'
import './styles/css/main.css'

// function Navbar({ title }) {
//   return (
//     <nav>
//       <ul className="flex justify-between items-center list-style-none">
//         <li>
//           <img alt="arrow" className="icon-small" src="/arrow.svg" />
//         </li>
//         <li className="text-gray-600 text-xl font-semibold">{title}</li>
//         <li>
//           <img alt="dots" className="icon" src="/dots.svg" />
//         </li>
//       </ul>
//     </nav>
//   )
// }

function Screen() {
  return (
    <div id="screen">
      <div>
        <div />
        <div />
      </div>
      <div>
        <div />
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
    </div>
  )
}

function Podcast() {
  return (
    <>
      <h2 className="text-center mt-6">#02 - Practice</h2>
      <p className="text-center text-gray-400 text-sm font-semibold mt-2">
        Digital Marketing - By Setup Cast
      </p>
    </>
  )
}

function Action() {
  return (
    <div className="flex items-center justify-center" id="actions">
      <button type="button" id="rewind">
        <img alt="dots" className="icon" src="/rewind.svg" />
      </button>
      <button type="button" id="play">
        <img alt="play" className="icon" src="/play.svg" />
      </button>
      <button type="button" id="forward">
        <img alt="forward" className="icon" src="/forward.svg" />
      </button>
    </div>
  )
}

function Status() {
  return (
    <div
      className="flex mt-4 items-center justify-center w-full text-md"
      id="bar"
    >
      <p className="text-gray-400 font-semibold">4.10</p>
      <div id="slider">
        <div style={{ width: '50%' }} />
        <div style={{ left: '50%' }} />
      </div>
      <p className="text-gray-400 font-semibold">12:02</p>
    </div>
  )
}

function History() {
  return (
    <div id="history">
      <h3 className="font-semibold text-xl text-gray-600">Recently played</h3>
      <ul className="list-style-none">
        <li className="flex items-center">
          <div />
          <div className="flex items-center">
            <p>
              <span className="font-semibold text-lg">
                #01 - Start with SEO
              </span>
              <span className="text-sm text-gray-500">
                By Setup Cast - 15:35
              </span>
            </p>
            <button type="button">
              <img alt="play" className="icon" src="/play.svg" />
            </button>
          </div>
        </li>
        <li className="flex items-center">
          <div />
          <div className="flex items-center">
            <p>
              <span className="font-semibold text-lg">
                #01 - Start with SEO
              </span>
              <span className="text-sm text-gray-500">
                By Setup Cast - 15:35
              </span>
            </p>
            <button type="button">
              <img alt="play" className="icon" src="/play.svg" />
            </button>
          </div>
        </li>
        <li className="flex items-center">
          <div />
          <div className="flex items-center">
            <p>
              <span className="font-semibold text-lg">
                #01 - Start with SEO
              </span>
              <span className="text-sm text-gray-500">
                By Setup Cast - 15:35
              </span>
            </p>
            <button type="button">
              <img alt="play" className="icon" src="/play.svg" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <Navbar title="Now playing" />
      <Screen />
      <Podcast />
      <Status />
      <Action />
      <History />
    </main>
  )
}
