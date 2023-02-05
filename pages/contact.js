import React from 'react'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import { BiMap, BiEnvelope, BiPhone, BiHappyAlt } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
// INTERNAL IMPORT
import Style from '../styles/Contact.module.css'
import formStyle from '../accountComps/AccountForm/AccountForm.module.css'
import { Button } from '../components'
const contact = () => {
    return (
        <div className={Style.contact}>
            <div className={Style.contact_box}>
                <h1>CONTACT</h1>
                <div className={Style.contact_box_box}>
                    <div className={Style.contact_box_box_left}>
                        <div className={Style.contact_box_box_left_item}>
                            <h3><span><BiMap /></span>&nbsp;&nbsp;ADDRESS</h3>
                            <p>Photo booth tattoped prim, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className={Style.contact_box_box_left_item}>
                            <h3><span><BiEnvelope /></span>&nbsp;&nbsp;EMAIL</h3>
                            <p>abc.example@example.com</p>
                        </div>
                        <div className={Style.contact_box_box_left_item}>
                            <h3><span><BiPhone /></span>&nbsp;&nbsp;PHONE</h3>
                            <p>000-123-456-7890</p>
                        </div>
                        <div className={Style.contact_box_box_left_item}>
                            <h3><span><BiHappyAlt /></span>&nbsp;&nbsp;SOCIAL</h3>
                            <div>
                                <a href="#">
                                    <TiSocialFacebook />
                                </a>
                                <a href="#">
                                    <TiSocialTwitter />
                                </a>
                                <a href="#">
                                    <TiSocialYoutube />
                                </a>
                                <a href="#">
                                    <TiSocialInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={Style.contact_box_box_right}>
                        <form>
                            <div className={formStyle.accountForm_box_input}>
                                <label htmlFor="Fullname">Fullname</label>
                                <input type="text" placeholder='ex: zenitsu' className={formStyle.accountForm_box_input_username} required />
                            </div>
                            <div className={formStyle.accountForm_box_input}>
                                <label htmlFor="email">Email</label>
                                <div className={formStyle.accountForm_box_input_box}>
                                    <div className={formStyle.accountForm_box_input_box_icon}>
                                        <HiOutlineMail />
                                    </div>
                                    <input type="text" placeholder='ex: zenitsu@gmail.com' required />
                                </div>
                            </div>
                            <div className={formStyle.accountForm_box_input}>
                                <label htmlFor="Message">Message</label>
                                <textarea name="Message" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                            </div>
                            <Button btnName="Send Message" handleClick={() => {}} classStyle={Style.button}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact