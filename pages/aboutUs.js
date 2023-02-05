import React from 'react'
import Image from 'next/image'
import { FcConferenceCall, FcCollaboration, FcSportsMode } from 'react-icons/fc'
// INTERNAL IMPORT
import Style from '../styles/AboutUs.module.css'
import { Brand } from '../components'
import images from '../img'
const aboutUs = () => {
    const founderArr = [
        {
            name: "John Smith",
            position: "Co-founder and Chief Excutive",
            image: images.founder1
        },
        {
            name: "Daniel Hame",
            position: "Co-founder and Chief Excutive",
            image: images.founder2
        },
        {
            name: "Orla Dwyer",
            position: "Co-founder, Chairman",
            image: images.founder3
        },
        {
            name: "Dara Frazier",
            position: "Co-founder, Chief Strategy Officer",
            image: images.founder4
        }
    ]
    const factsArray = [
        {title: "10 million", info: "Articles have been public around the world (as of Sept. 30, 2021)"},
        {title: "100,000", info: "Registered users account (as of Sept.30, 2021)"},
        {title: "220+", info: "Countries and regions have our presence (as of Sept. 30, 2021)"},
    ]
    return (
        <div className={Style.aboutUs}>
            <div className={Style.aboutUs_box}>
                <div className={Style.aboutUs_box_hero}>
                    <div className={Style.aboutUs_box_hero_left}>
                        <h1><FcConferenceCall />&nbsp;&nbsp;About Us</h1>
                        <p>We're impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world</p>
                    </div>
                    <div className={Style.aboutUs_box_hero_right}>
                        <Image src={images.hero2} />
                    </div>
                </div>
                <div className={Style.aboutUs_box_title}>
                    <h2><FcCollaboration />&nbsp;&nbsp;Founder</h2>
                    <p>We're impartial and independent, and every day we create distinctive, world-class programmes and content</p>
                </div>
                <div className={Style.aboutUs_box_founder}>
                    <div className={Style.aboutUs_box_founder_box}>
                        {founderArr.map((el, i) => (
                            <div className={Style.aboutUs_box_founder_box_img} key={i}>
                                <Image src={el.image} alt="founder"className={Style.aboutUs_box_founder_box_img_img}/>
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.aboutUs_box_title}>
                    <h2><FcSportsMode />&nbsp;&nbsp;Fast Facts</h2>
                    <p>We're impartial and independent, and every day we create distinctive, world-class programmes and content</p>
                </div>
                <div className={Style.aboutUs_box_facts}>
                    <div className={Style.aboutUs_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutUs_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs