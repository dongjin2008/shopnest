import { NextRequest, NextResponse } from "next/server";
import getPrismaClient from "../../../../lib/prisma";
import { z } from "zod";

const prisma = getPrismaClient()

const bodySchema = z.object({
  quantity: z.number(),
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
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const orderdItemsData = bodySchema.parse(body)
    const id  = req.url.split('baskets/')[1].split('/')[0]
    const orderdItems = await prisma.orderedProduct.update({
      where: {
        id: id,
      },
      data: {
        quantity: orderdItemsData.quantity,
      }
    })
    return NextResponse.json(orderdItems, { status: 200 })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}


