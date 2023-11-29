import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../lib/prisma'
import { z } from 'zod'

const basketSchema = z.object({
  basketId: z.string(),
})

export async function GET(req: NextRequest) {
  const body = await req.json()
  const basketData = basketSchema.parse(body)
  const baskets = await prisma.orderedProduct.findMany({
    where: {
      basketId: basketData.basketId, 
    }
  });
  return NextResponse.json(baskets)
}
