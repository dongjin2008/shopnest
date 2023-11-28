import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../lib/prisma'
import { z } from 'zod'

const createProductSchema = z.object({
    name: z.string(),
    price: z.number(),
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

export async function PUT(req: NextRequest) {
    const { id, name, price, description, image } = await req.json()
    const product = await prisma.product.update({
        where: { id },
        data: { name, price, description, image }
    })
    return NextResponse.json(product)
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json()
    const product = await prisma.product.delete({ where: { id } })
    return NextResponse.json(product)
}