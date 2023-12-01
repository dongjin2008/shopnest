import { NextRequest, NextResponse } from "next/server";
import getPrismaClient from "../../../lib/prisma";

const prisma = getPrismaClient()

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json()
        const user = await prisma.user.findUnique({ where: { username } })
        if (!user) throw new Error('User not found')
        if (user.password !== password) throw new Error('Invalid password')
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}

