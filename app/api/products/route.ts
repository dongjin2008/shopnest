import { NextRequest, NextResponse } from "next/server";
import getPrismaClient from '../../../lib/prisma'
import { z } from 'zod'

const prisma = getPrismaClient()

const createProductSchema = z.object({
    name: z.string(),
    price: z.number(),
    priceId: z.string(),
    description: z.string(),
    image: z.string().url(),
})

export async function GET() {
    const products = await prisma.product.findMany();
    return NextResponse.json(products)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const productData = createProductSchema.parse(body)
    const product = await prisma.product.create({ data: productData })
    
    return NextResponse.json(product)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}