import React from 'react'
import { TiTick } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './Subscription.module.css'
import { Button } from '@/components/Home'
const Subscription = ({ i, el }) => {
    return (
        <div className={Style.subscription_item}>
            <div className={Style.subscription_item_box}>
                <span className={Style.subscription_item_box_plan}>
                    {el.plan}
                </span>
                {el.popular && <small className={Style.subscription_item_box_popular}>
                    {el.popular}
                </small>}
                <p className={Style.subscription_item_box_price}>
                    {el.price}
                </p>
                <div className={Style.subscription_item_box_service}>
                    {el.service.map((el, i) => (
                        <p className={Style.subscription_item_box_service_para} key={i}><span><TiTick /></span>{el}</p>
                    ))}
                </div>
                <Button btnName="Submit" handleClick={() => {}} classStyle={Style.button}/>
            </div>
        </div>
    )
}

export default Subscription