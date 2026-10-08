import React from 'react'
import "./profile.css"

import catimg from "./img/cut cat serhio 02-1813x1811-720x719.jpg"
import { FaFacebook, FaRegComment } from 'react-icons/fa6'
import { FaInstagramSquare, FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FcLike } from 'react-icons/fc';
import { RiShareForwardLine } from 'react-icons/ri';


const Profilecard = () => {
    return (
        <section className={'container'}>

            <article className="text">

                <h1> this is my web page where i am displaying my details of the facebook</h1>
            </article>

            <article className={'card'}>


                <img src={catimg} alt="" />
                <h1>this is a cat </h1>
                <h3>the life span is 10yers</h3>

                <div className='Plogo'>
                    <FaFacebook style={{ color: "blue" }} />
                    <FaTelegramPlane style={{ color: "skyblue" }} />
                    <FaYoutube style={{ color: "red" }} />
                    <FaInstagramSquare style={{ color: "orange" }} />
                </div>


                <div className="btn">
                    <button> Subscribe </button>
                    <button> Message</button>
                </div>

                <div className="lcs">
                    <samp> <FcLike /> 60.4k  </samp>
                    <span> <FaRegComment />  20k</span>
                    <span><RiShareForwardLine />  30.4k</span>


                </div>
            </article>


        </section>
    )
}

export default Profilecard