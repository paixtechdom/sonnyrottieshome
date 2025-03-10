import { Button } from "../../../assets/components/Button"
import max from "../../../assets/images/max.jpg"

export const Hero = () => {
    return(
        <section className="min-h-screen bg-heroSm md:bg-hero bg-center bg-cover w-full center bg-fixed pt-[10vh] lg:pt-0"> 
            <div className="w-11/12 lg:w-10/12 center flex-col lg:flex-row gap-[120px]">

                <div className="w-full flex flex-col justify-center items-center text-white lg:gap-5 gap-3">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl w-full hero-text">
                    Sony Rotties Home
                </h1>
                    <p className="w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis reiciendis ipsam itaque eaque dolorum tempora similique maxime, id voluptate!
                   </p>
                    <p className="w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis reiciendis ipsam itaque eaque dolorum tempora similique maxime, id voluptate!
                   </p>
                    <div className="w-full">
                        <Button text="Book an Appointment" className="bg-primary text-white font-bold w-fit py-3"/>
                    </div>
                </div>

                <img src={max} alt="" className="w-10/12 lg:w-5/12 h-[60vh] object-cover rounded-xl shadow-xl "/>
            </div>
        </section>

      
    )
}