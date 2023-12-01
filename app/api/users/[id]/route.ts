import { NextRequest, NextResponse } from "next/server";
import getPrismaClient from '../../../../lib/prisma'

const prisma = getPrismaClient()

export async function GET(req: NextRequest) {
    try {
        const id  = req.url.split('users/')[1].split('/')[0]
        const basket = await prisma.basket.findFirst({
            where: {
                userId: id,
            }
        })
        return NextResponse.json(basket, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}