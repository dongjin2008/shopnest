import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../lib/prisma'
import { z } from 'zod'

const createUserSchema = z.object({
    username: z.string(),
    password: z.string()
})


export async function GET() {
    try {

        const users = await prisma.user.findMany();
        return NextResponse.json(users)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const userData = createUserSchema.parse(body)
        const user = await prisma.user.create({ data: userData })
        
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json()
        const user = await prisma.user.delete({ where: { id } })
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}