import { NFTMarketplaceContext } from 'Context/NFTMarketplaceContext'
import React, { useContext, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineHttp } from 'react-icons/md'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './AccountForm.module.css'
const AccountForm = () => {
    const [input, setInput] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(input)
    }
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }
    const { updateUser } = useContext(NFTMarketplaceContext)
    return (
        <div className={Style.accountForm}>
            <div className={Style.accountForm_box}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="name">Username</label>
                        <input type="text" name="name" placeholder='shoaib bhai' className={Style.accountForm_box_input_username} onBlur={(e) => handleInput(e)} />
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.accountForm_box_input_box}>
                            <div className={Style.accountForm_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="email" name="email" placeholder='Email' onBlur={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" placeholder='Something about yourself in few words' onBlur={(e) => handleInput(e)}></textarea>
                    </div>
                    <div className={Style.accountForm_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.accountForm_box_input_box}>
                            <div className={Style.accountForm_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder='website' />
                        </div>
                    </div>
                    <div className={Style.accountForm_box_input_social}>
                        <div className={Style.accountForm_box_input}>
                            <label htmlFor="facebook">Facebook</label>
                            <div className={Style.accountForm_box_input_box}>
                                <div className={Style.accountForm_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder='http://shoaid' />
                            </div>
                        </div>
                        <div className={Style.accountForm_box_input}>
                            <label htmlFor="Twitter">Twitter</label>
                            <div className={Style.accountForm_box_input_box}>
                                <div className={Style.accountForm_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder='http://shoaid' />
                            </div>
                        </div>
                        <div className={Style.accountForm_box_input}>
                            <label htmlFor="Instagram">Instagram</label>
                            <div className={Style.accountForm_box_input_box}>
                                <div className={Style.accountForm_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder='http://shoaid' />
                            </div>
                        </div>
                    </div>
                    <div className={Style.accountForm_box_btn}>
                        <button type='submit' className={Style.accountForm_box_btn_btn}>Update User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountForm