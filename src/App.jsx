import dots from './img/Dots.svg'
import sub from './img/Group 3.svg'
import sub1 from './img/Screenshot 2024-03-13 at 11.09 1 (1).svg'
import sub2 from './img/Spring Season.svg'

function App() {
  return (
    <>
      <div className="b1">

        <div className='flex justify-between py-3 px-4'>
          <img className='' src={dots} alt="" />
          <p className='font-bold'>SUMMER SALE UP TO 50% OFF</p>
          <img className='' src={dots} alt="" />
        </div>

      </div>



      <div className='p-16'>

        <div className='flex justify-center'>
          <img className='' src={sub} alt="" />
        </div>

      </div>



      <div>

        <div>
        <img className='w-full' src={sub1} alt="" />
        </div>

        <div>
        <img className='' src={sub2} alt="" />
        </div>

        <div>

        </div>

      </div>


      <div className='b1 flex justify-between py-8 px-48'>

        <div>
          <p className='font-bold'>Numero</p>
        </div>

        <div>
          <p className='font-bold'>Numero</p>
        </div>

        <div>
          <p className='font-bold'>Numero</p>
        </div>

        <div>
          <p className='font-bold'>Numero</p>
        </div>

        <div>
          <p className='font-bold'>Numero</p>
        </div>

      </div>

    </>
  );
}

export default App;
