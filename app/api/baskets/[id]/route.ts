import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../lib/prisma'
import { z } from 'zod'

const basketSchema = z.object({
  basketId: z.string(),
})

export async function GET(req: NextRequest) {
  try {
    const id  = req.url.split('baskets/')[1].split('/')[0]
    const orderdItems = await prisma.orderedProduct.findMany({
      where: {
        basketId: id,
      }
    })
    return NextResponse.json(orderdItems, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}


