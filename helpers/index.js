const ipfsToHTTPS = (url) => {
    if (!url.startsWith("ipfs://")) return console.log("Not a ipfs url")
    const cid = url.substring(7)
    return `https://ipfs.io/ipfs/${cid}`
}

const minifyAddress = (address) => {
    const start = address.substring(0, 5)
    const end = address.substring(address.length - 4)
    return `${start}...${end}`
}

export { ipfsToHTTPS, minifyAddress }