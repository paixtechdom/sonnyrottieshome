import { Dogs } from '../../assets/Constants'
import { EachDog } from './EachDog'

const AvailableDogs = () => {
  return (
    <main className='w-full center flex-col mt-[15vh] text-base'>

      <div className='w-11/12 lg:w-10/12 xl:w-9/12'>

        <h1 className='w-full text-center text-4xl font-bold mb-20 mt-10'>Available Puppies</h1>

      </div>

        <div className="flex flex-col gap-32 w-full center">
          
          {
            Dogs.map((dog, i) => (
                <EachDog 
                  key={i} 
                  dog={dog}
                  index={i}
                />
            ))
          }

        </div>

    </main>
  )
}

export default AvailableDogs