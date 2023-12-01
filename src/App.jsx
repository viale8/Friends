import { useState } from 'react'
import './App.css'
import MyComponent from './component/MyComponent'
import Cast from './component/Cast'
import Carousel from './component/Carousel'
import BurgerMenu from './component/BurgerMenu'

const images = [
  // URL des images pour le carousel
  'https://media.vogue.fr/photos/5d51422c5dc6c20009ca8833/16:9/w_2414,h_1358,c_limit/010_A7A08B18_317.jpg',
  'https://media.gqmagazine.fr/photos/60afad28ec9c6d9184c0dd99/master/pass/Friends%20reunion.jpg',

];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-purple-dark">
        <div className="">
          <div className="bg-black w-full h-12 flex absolute justify-between pl-10 lg:pl-40">
            {/* <div>vide</div> */}
            <img className="m-auto h-full" src="logo.png"/>
            <BurgerMenu />
          </div>
          <Carousel images={images} />
          <div className="bg-blue h-2"></div>
          <div className="bg-yellow h-2"></div>
          <div className="bg-red h-2"></div>
        </div>

        <div className="m-7 pt-2">
          <h1 className="uppercase text-white text-xl pb-7 font-gabriel_weiss_friends" id="season">Discover each episode by season!</h1>
          < MyComponent />
        </div>

        <div className="bg-purple-light pb-8">
          <h1 className="uppercase text-3xl font-gabriel_weiss_friends ml-7 pt-10 pb-7 text-purple-dark font-bold flex justify-center" id="cast">Cast</h1>
          < Cast />
        </div>

        <div className="bg-black flex justify-center items-center">
          <p className="text-white text-xs p-1 font-light	">Created by Amélie Viale and Enzo Fradet - MMI3 - 2023</p>
        </div>



      </div>
    </>
  )
}

export default App
