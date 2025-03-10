import { Button } from "../../../assets/components/Button"
import max from "../../../assets/images/max.jpg"

export const Hero = () => {
    return(
        <section className="min-h-[120vh] bg-heroSm md:bg-hero bg-center bg-cover w-full center bg-fixed"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row">

                <div className="w-full flex flex-col j ustify-center items-center text-white gap-6 lg:gap-8">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl w-full hero-text">
                    Sony Rotties Home
                </h1>
                    <p className="w-full">
                        Comprehensive, high-quality laboratory testing for your health needs.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis reiciendis ipsam itaque eaque dolorum tempora similique maxime, id voluptate!
                   </p>
                    <div className="w-full">
                        <Button text="Book an Appointment" className="bg-primary text-white font-bold w-fit py-3"/>
                    </div>
                </div>

                <img src={max} alt="" className="w-10/12 lg:w-5/12 h-[60vh] object-cover rounded-xl2"/>
            </div>
        </section>

      
    )
}