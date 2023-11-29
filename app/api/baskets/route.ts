import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../lib/prisma'
import { z } from 'zod'

const productSchema = z.object({
  productId: z.string(),
  quantity: z.number()
})

const basketSchema = z.object({
  userId: z.string(),
  products: z.array(productSchema)
})

export async function GET() {
  const baskets = await prisma.basket.findMany();
  return NextResponse.json(baskets)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const basketData = basketSchema.parse(body)
    let basket = await prisma.basket.findUnique({
      where: { 
        id: basketData.userId,
      },
    });
    if (!basket) {
      basket = await prisma.basket.create({
        data: {
          userId: basketData.userId,
        }
      });
    }

    const existingOrderedProduct = await prisma.orderedProduct.findUnique({
      where: {
        productId: basketData.products[0].productId,
      }
    })

    if (existingOrderedProduct) {
      const updatedOrderedProduct = await prisma.orderedProduct.update({
        where: {
          productId: basketData.products[0].productId,
        },
        data: {
          quantity: existingOrderedProduct.quantity + 1
        }
      })
      return NextResponse.json(updatedOrderedProduct)
    } else {
      const orderedProduct = await prisma.orderedProduct.create({
        data: {
          productId: basketData.products[0].productId,
          quantity: basketData.products[0].quantity,
          basket: {
            connect: { id: basket.id }
          },
        },
      })
      return NextResponse.json(orderedProduct)
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

}
export async function PUT(req: NextRequest) {
  const { id, userId, products } = await req.json()
  const basket = await prisma.basket.update({
    where: { id },
    data: { userId, products }
  })
  return NextResponse.json(basket)
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  const basket = await prisma.basket.delete({ where: { id } })
  return NextResponse.json(basket)
}