import React, { useState } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti'
//INTERNAL IMPORT
import Style from './AuthorTaps.module.css'
const AuthorTaps = ({ setAuthorTab }) => {
  const [openList, setOpenList] = useState(false)
  const [activeBtn, setActiveBtn] = useState(1)
  const [selectedMenu, setSelectedMenu] = useState("Most Recent")

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed"
  ]

  const openTab = ({ e, active }) => {
    const btnText = e.target.innerText
    setAuthorTab(btnText)
    setActiveBtn(active)
  }
  return (
    <div className={Style.authorTaps}>
      <div className={Style.authorTaps_box}>
        <div className={Style.authorTaps_box_left}>
          <div className={Style.authorTaps_box_left_btn}>
            <button className={`${activeBtn == 1 ? Style.active : ""}`} onClick={(e) => openTab({ e, active: 1 })}>All NFTs{""}</button>
            <button className={`${activeBtn == 2 ? Style.active : ""}`} onClick={(e) => openTab({ e, active: 2 })}>Listed NFTs{""}</button>
            <button className={`${activeBtn == 3 ? Style.active : ""}`} onClick={(e) => openTab({ e, active: 3 })}>Unlisted NFTs{""}</button>
          </div>
        </div>
        <div className={Style.authorTaps_box_right}>
          <div className={Style.authorTaps_box_right_para} onClick={() => setOpenList(!openList)}>
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openList && (
            <div className={Style.authorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div key={i} onClick={() => {setSelectedMenu(el); setOpenList(false);}} className={Style.authorTaps_box_right_list_item}>
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorTaps