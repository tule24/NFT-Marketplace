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

const eth2usd = async (amount) => {
    const data = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then(res => res.json())
    const eth2usd = data ? data['ethereum']['usd'] : 0
    const amount_in_usd = amount * eth2usd
    const rounded_two_decimals = Math.round(amount_in_usd * 1000) / 1000
    return rounded_two_decimals
}

export { ipfsToHTTPS, minifyAddress, eth2usd }