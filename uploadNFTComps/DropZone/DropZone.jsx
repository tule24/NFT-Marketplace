import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './DropZone.module.css'
import images from '../../img'
const DropZone = ({ title, heading, subHeading, nftData, image }) => {
  const [fileURL, setFileURL] = useState(null)
  const onDrop = useCallback(async (acceptedFile) => {
    setFileURL(acceptedFile[0])
  })

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000
  })
  return (
    <div className={Style.dropZone}>
      <div className={Style.dropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.dropZone_box_input}>
          <p>{title}</p>
          <div className={Style.dropZone_box_input_img}>
            <Image src={image} alt="upload" width={100} height={100} className={Style.dropZone_box_input_img_img} />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileURL && (
        <aside className={Style.dropZone_box_aside}>
          <div className={Style.dropZone_box_aside_box}>
            <Image src={images.nft_image_1} alt="nft image" width={200} height={200} />
            <div className={Style.dropZone_box_aside_box_preview}>
              <div className={Style.dropZone_box_aside_box_preview_one}>
                <p><samp>NFT Name:</samp>{nftData.itemName}</p>
                <p><samp>Website:</samp>{nftData.website}</p>
              </div>
              <div className={Style.dropZone_box_aside_box_preview_two}>
                <p><span>Description:</span>{nftData.description}</p>
              </div>
              <div className={Style.dropZone_box_aside_box_preview_two}>
                <p><span>Royalties:</span>{nftData.royalties}</p>
                <p><span>File size:</span>{nftData.fileSize}</p>
                <p><span>Properties:</span>{nftData.properties}</p>
                <p><span>Category:</span>{nftData.category}</p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  )
}

export default DropZone