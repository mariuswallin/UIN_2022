import { useState } from 'react'

export default function App() {
  const [show, setShow] = useState('design')
  // Write JavaScript, use Hooks, add state and more

  const handleNavigation = (event) => {
    console.log(event.target.dataset.href)
    const { href } = event.target.dataset
    if (href) {
      setShow(href)
    }
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <button type="button" data-href="design" onClick={handleNavigation}>
              <span>01.</span>Design
            </button>
          </li>
          <li>
            <button
              type="button"
              data-href="programming"
              onClick={handleNavigation}
            >
              <span>02.</span>Programming
            </button>
          </li>
          <li>
            <button
              type="button"
              data-href="support"
              onClick={handleNavigation}
            >
              <span>03.</span>Support
            </button>
          </li>
        </ul>
      </nav>
      <main>
        {show === 'design' ? (
          <>
            <section>
              <h1>Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h2>
                Learn everything there is to know about the ubiquitous lorem
                ipsum passage
              </h2>
              <p>
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software.
              </p>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book
              </p>
            </section>
          </>
        ) : null}
        {show === 'programming' ? (
          <>
            <section>
              <h1>Programming</h1>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h2>
                From its medieval origins to the digital era there is to know
                about the ubiquitous lorem ipsum passage
              </h2>
              <p>
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software.
              </p>
            </section>
          </>
        ) : null}
        {show === 'support' ? (
          <>
            <section>
              <h1>Support</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h2>
                Origins to the digital era, learn everything there is to know
                about the ubiquitous lorem ipsum passage
              </h2>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book
              </p>
              <p>
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software.
              </p>
            </section>
          </>
        ) : null}
      </main>
    </>
  )
}
