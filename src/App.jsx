import { useState } from 'react'
import './App.css'
import MyComponent from './component/MyComponent'
import Cast from './component/Cast'
import Carousel from './component/Carousel'

const images = [
    // URL des images pour le carousel
  'https://media.vogue.fr/photos/5d51422c5dc6c20009ca8833/16:9/w_2414,h_1358,c_limit/010_A7A08B18_317.jpg',
  'https://media.vanityfair.fr/photos/614b033a3657cac85cbb2b02/16:9/w_1999,h_1124,c_limit/Jon%20Ragel%20:%C2%A9%20NBC%20:%20Courtesy%20Everett%20Collection.jpg',
  'https://media.gqmagazine.fr/photos/60ad1aa6113f235285334bdc/16:9/w_2560%2Cc_limit/mgid-ao-image-mtv.com-106174.jpeg',
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-purple-dark">
        <div className="">
          <div className="bg-black h-16 flex justify-between">
            <div>DIV----------------VIDE</div>
            <img src="logo.png" className="items-center"></img>
            <ul className="flex gap-7 items-center flex-end pr-6">
              <li className="text-white"><a href="#season">Seasons</a></li>
              <li className="text-white pr-3"><a href="#cast">Cast</a></li>
            </ul>
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

        <div className="bg-purple-light">
          <h1 className="uppercase text-2xl font-gabriel_weiss_friends ml-7 pt-6 pb-7 text-purple-dark font-bold flex justify-center" id="cast">Cast</h1>
          < Cast />
        </div>
      </div>
    </>
  )
}

export default App
