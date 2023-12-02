import { NextRequest, NextResponse } from "next/server";
import getPrismaClient from "../../../../lib/prisma";

const prisma = getPrismaClient()

export async function GET(req: NextRequest) {
  try {
    const basketId  = req.url.split('total/')[1].split('/')[0]
    const total = await prisma.orderedProduct.findMany({
      where: {
        basketId: basketId,
      },
      select: {
        price: true,
        quantity: true,
      }
    })

    const total_price = total.reduce((a, b) => {
      return a + b.price * b.quantity
    }, 0)
    return NextResponse.json(total_price, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}