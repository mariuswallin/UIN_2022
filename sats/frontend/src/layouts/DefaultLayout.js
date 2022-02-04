import { Outlet } from 'react-router-dom'

/**
 * Her kan du tilpasse layouten som du vil.
 * Du kan også lage flere slike filer om du vil ha flere layouter
 * */
export default function DefaultLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
