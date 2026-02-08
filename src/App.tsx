import { Outlet } from "react-router"

export default function App() {
   return (
     <div className="App  flex flex-col items-center justify-center min-h-screen bg-blue-950">
      <Outlet />
     </div>
   )
}