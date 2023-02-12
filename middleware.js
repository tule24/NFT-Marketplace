import { NextResponse } from 'next/server'

export function middleware(req) {
    const reponse = NextResponse.next()
    const time = new Date(Date.now()).toLocaleDateString()
    console.log(`{ time: ${time}, method: ${req.method}, url: ${req.url}, status: ${reponse.status} }`)
    return reponse
}
