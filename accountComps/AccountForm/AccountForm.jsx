import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './AccountForm.module.css'
import { Button } from '../../components'
const AccountForm = () => {
    return (
        <div className={Style.accountForm}>
            <div className={Style.accountForm_box}>
                <form>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="name">Username</label>
                        <input type="text" placeholder='shoaib bhai' className={Style.accountForm_box_input_username} required/>
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.accountForm_box_input_box}>
                            <div className={Style.accountForm_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="text" placeholder='Email' required/>
                        </div>
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" placeholder='Something about yourself in few words'></textarea>
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.accountForm_box_input_box}>
                            <div className={Style.accountForm_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder='website'/>
                        </div>
                    </div>
                    <div className={Style.accountForm_box_input_social}>
                        <div className={Style.accountForm_box_input}>
                            <label htmlFor="facebook">Facebook</label>
                            <div className={Style.accountForm_box_input_box}>
                                <div className={Style.accountForm_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder='http://shoaid'/>
                            </div>
                        </div>
                        <div className={Style.accountForm_box_input}>
                            <label htmlFor="Twitter">Twitter</label>
                            <div className={Style.accountForm_box_input_box}>
                                <div className={Style.accountForm_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder='http://shoaid'/>
                            </div>
                        </div>
                        <div className={Style.accountForm_box_input}>
                            <label htmlFor="Instagram">Instagram</label>
                            <div className={Style.accountForm_box_input_box}>
                                <div className={Style.accountForm_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder='http://shoaid'/>
                            </div>
                        </div>
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="wallet">Wallet address</label>
                        <div className={Style.accountForm_box_input_box}>
                            <div className={Style.accountForm_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder='Ex: 0xEA674FD8W5AS5ASASFGHKH58ERG5RE4H'/>
                            <div className={Style.accountForm_box_input_box_icon}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>
                    <div className={Style.accountForm_box_btn}> 
                        <Button btnName="Upload profile" handleClick={() => {}} classStyle={Style.button}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountForm