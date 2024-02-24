import React from 'react'
import BgPolygon from "../../assets/polygon.png"
import Vector from "../../assets/vector-wave.png"
import { FaUser } from 'react-icons/fa'

const bgstyle = {
    backgroundImage: `url(${BgPolygon})`, 
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
}

function About({HandlePopup}) {
  return (
    <>
        <div style={bgstyle} className=' py-14'>
            <div className="container min-h-[500px] relative z-10">
                <h1 data-aos="fade"
                className=' pt-20 tracking-wider text-4xl
                    font-semobild text-white text-center'>
                    About Us
                </h1>

                {/* card Section  */}

                <div data-aos="fade"
                     data-aos-delay="300"
                className=' bg-white/80 p-10 my-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Inventore excepturi itaque autem fuga. 
                    Ducimus impedit porro itaque quas iusto ipsam 
                    qui nihil incidunt, minima reprehenderit, 
                    mollitia maxime doloribus rerum! Hic, perferendis 
                    libero repellendus blanditiis omnis veniam sequi 
                    pariatur, magni, atque numquam nam ad odit. Culpa 
                    saepe architecto, quibusdam ipsam hic, nulla et 
                    nemo temporibus doloremque, consectetur dolorum 
                    cum quis impedit optio aspernatur quidem modi 
                    quaerat iste esse reprehenderit. Obcaecati 
                    necessitatibus odio alias et quasi voluptatum 
                    voluptatem, est illum omnis sit.
                    <div className=' pt-10 flex justify-center'>
                        <button 
                        onClick={HandlePopup}
                        className='flex justify-center items-center gap-2 bg-primary
                            text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300 '>
                            <FaUser />
                            My Account
                        </button>
                    </div>
                </div>
            </div>

            {/* wave vector image  */}
            <div className='absolute top-0 right-0 w-full'>
                <img src={Vector} alt="" 
                className=' mx-auto' />
            </div>
        </div>
    </>
  )
}

export default About