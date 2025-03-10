import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../assets/components/Button'

const info  = [
  {
    label: "Puppy Status",
    info: "Available"
  },
  {
    label: "Age",
    info: "10 weeks"
  },
  {
    label: "Registered",
    info: "Yes"
  },
  {
    label: "Vaccinations",
    info: "Up to Date"
  },
  {
    label: "Shipping",
    info: "Available"
  },
  {
    label: "Parents on Site",
    info: "Healthy and Vaccinated"
  }
]

          
export const EachDog:FC<any> = ({dog, index}) => {
  return (
      <div className={`w-full h-fit center ${index % 2 == 0 ? "bg-zinc-100" : "" } py-9`}>
      <div className={`w-11/12 lg:w-10/12 xl:w-9/12 h-fit flex flex-col lg:flex-row gap-12 lg:gap-20 center`}>

        <div className="flex relative center lg:h-[60vh] w-full lg:w-5/12">
          <img src={dog.img} alt={`Image for ${dog.name}`} className='w-full h-full object-cover'/>
          {
            dog.isSold &&
            <p className='absolute top-4 left-4 rounded-full text-sm bg-white bg-opacity-70 text-red w-20 text-center'>Sold</p>
          }
        </div>
        

        <div className="flex flex-col gap-3">

          <Info 
            label={"Name"}
            info={dog.name}
          />

          <Info 
            label={"Gender"}
            info={dog.gender}
          />

          {
            info.map((info, i) =>(
              <Info 
                key={i}
                label={info.label}
                info={info.info}
              />
            ))
          }


          <p>1 Year Genetic Health Guarantee</p>
          <p>Veterinary Health Exam Certificate</p>
          <p>100% Domesticated and Potty Trained</p>

          <Link to={"/contact"}>
            <Button 
              text={"Buy Now"}
              className='bg-primary text-white 2'
            />
          </Link>
        </div>

      </div>    
      </div>    
    
  )
}


export const Info:FC<any> = ({label, info}) => {
  return(
    <div className="flex items-center gap-1">
      <span className='font-bold'>
        {label}:
      </span>

      <span>{info}</span>
    </div>
  )
}