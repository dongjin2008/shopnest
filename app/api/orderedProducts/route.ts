import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../lib/prisma'
import { z } from 'zod'

const basketSchema = z.object({
  basketId: z.string(),
})

export async function GET(req: NextRequest) {
  try {
    const baskets = prisma.basket.findMany()
    return NextResponse.json(baskets)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(){
  try {
    prisma.basket.deleteMany()
    return NextResponse.json("Deleted all ordered products")
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
