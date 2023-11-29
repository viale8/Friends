import { useState } from 'react'
import './App.css'
import MyComponent from './component/MyComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-purple-dark">
        <div className="">
          <div className="bg-black h-20 flex justify-between p-4">
            <div>DIV----------------VIDE</div>
            <img src="logo.png" className="items-center"></img>
            <ul className="flex gap-7 items-center flex-end pr-6">
              <li className="text-white"><a href="#season">Seasons</a></li>
              <li className="text-white"><a href="#season">Cast</a></li>
            </ul>
          </div>
          <img src="img_background.png" className="w-screen"></img>
          <div className="bg-blue h-2"></div>
          <div className="bg-yellow h-2"></div>
          <div className="bg-red h-2"></div>
        </div>

        <div className="m-7 pt-2">
          <h1 className="uppercase text-white text-xl pb-7 font-gabriel_weiss_friends" id="season">Discover each episode by season!</h1>
          < MyComponent />
        </div>

        <div id="cast">

        </div>
      </div>
    </>
  )
}

export default App
