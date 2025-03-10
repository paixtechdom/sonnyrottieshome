import { AfterHero } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import blur from "../../assets/images/blur.png"
import guy from "../../assets/images/guy.jpg"
import { Button } from "../../assets/components/Button"
import { useEffect } from "react"
import { ScrolltoTop } from "../../App"


const HomePage = () => {
    useEffect(() => {
        ScrolltoTop()
    }, [])
    return(
        <main className="center flex-col bg-bg">

            <Hero />
            
            {/* <AfterHero /> */}

            {/* <section className="center w-full text-primary py-[20vh] overflow-hidden relative">
                <div className="w-11/12 lg:w-10/12 flex-col lg:flex-row center gap-[50px]">
                    <div className="w-full lg:w-5/12 center relative h-[50vh] overflow-hidden">
                        <img src={guy} alt="Image of Male Lab Scientist" className="object-cover w-full h-full"/>
                    </div>

                    <div className="flex flex-col gap-6 text-primary w-full lg:w-7/12">
                        <h2 className="font-bold text-3xl">In need of Laboratory Services?</h2>

                        <p className="tracking-wide leading-relaxed text-gray-500 text-lg">
                        Discover a wide range of reliable laboratory tests tailored to meet your healthcare needs. From routine blood tests to specialized diagnostics, our state-of-the-art facilities and experienced professionals ensure precise results with a quick turnaround time. Book an appointment today for quality diagnostic support.
                        </p>
                        <Button
                            text={"Book Appointment"}
                            className="text-white bg-primary flex items-center h-fit py-3 w-fit px-9"
                            navigateTo="/contact" 
                        />
                    </div>
                </div>
            </section>        */}

        </main>
    )
}


export default HomePage