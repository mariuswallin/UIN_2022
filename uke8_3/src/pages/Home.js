import Form from '../components/Form'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <main className="">
      <section>
        <header>
          <h1>Overskrift</h1>
          <span>av Nora Nordman</span>
        </header>
        <p>
          Humblebrag single-origin coffee tilde, +1 bespoke trust fund unicorn
          kombucha affogato etsy distillery viral pok pok. Tousled bespoke you
          probably haven't heard of them stumptown pour-over. Shaman taxidermy
          pickled austin readymade pinterest tumeric aesthetic viral keffiyeh
          quinoa venmo distillery tousled.
        </p>
        <Form />
      </section>
      <Sidebar />
    </main>
  )
}
