import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, animateScroll as scroll } from 'react-scroll';

function Hero() {
  return (
    <div>
        <div className='container font-roboto'>
        <div className="md:grid grid-cols-2 grid-rows-1 gap-8">
            <div className='mt-4 md:mt-40 md:mr-10 space-y-1'>
                <div>
                    <div className='pb-4'>
                        <p className='font-roboto  font-bold text-2xl text-center  md:text-5xl bg-gradient-to-r from-orange-400 to-red-900 bg-clip-text text-transparent whitespace-nowrap mb-'>Savor Culinary Delights.</p>

                    </div>
                <p className='font-roboto text-sm p-4 md:p-0 md:text-base pt-2'>Explore the culinary wonders of our virtual kitchen and embark on a delightful journey through a treasure trove of recipes.</p>   
                <p className='pt-4 md:mt-4 text-sm p-4 md:p-0 md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, incidunt impedit vitae reprehenderit eius ea quam consequatur? Culpa, minus libero?</p> 
                </div>
                <div className='pt-5 justify-end items-center flex'>
                    <Link
                     activeClass="active"
                     to="repices"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                    className='w-32 text-center mr-8 md:mr-0 p-3 h-auto rounded-lg shadow-md font-semibold text-white botder-3 cursor-pointer hover:shadow-lg hover:shadow-red-200 hover:bg-red-400 duration-200 bg-bg-repice-red'>REPICES</Link>

                </div>
            </div>


            <div className='mt-10 ml-16  md:w-[500px] p-6 md:p-8'>
                <p className='font-bold font-roboto text-xl text-center text-gray-900 opacity-75 mr-8 md:mr-0 md:m-4'>Explore the new taste</p>
                <Carousel className='shadow-xl rounded mr-10 md:mr-0' infiniteLoop  showThumbs={false} autoPlay>
                    <div className='w-full h-full'>
                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-full'>
                        <img src="https://www.southernliving.com/thmb/iMbEz1a8s6K1OH8e6AIuJPGicMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern_Living_Cream_Cheese_Sausage_Balls_SEO48_TK_042-a75f4d8d21e44291bfe989d05b3b8e5a.jpg" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-full'>
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-full'>
                        <img src="https://www.eatingwell.com/thmb/f8zaOjsVcsda2snAnihEIUrPNy8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SalmonSunDriedTomato_16x9-2000-8fcc316cb6be46dfa2d2950f86fc4ea4.jpg" className='w-full h-full object-cover' />
                    </div>
                </Carousel>
            </div>

        </div>
        </div>
      
    </div>
  )
}

export default Hero
