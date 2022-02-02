import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <main className="w-full">
      <Outlet />
    </main>
  )
}
