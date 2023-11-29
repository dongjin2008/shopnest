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

export async function GET(req: NextRequest) {
  const baskets = await prisma.basket.findMany()
  return NextResponse.json(baskets)
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const basketData = basketSchema.parse(body)
    console.log(basketData.userId)
    const basket = await prisma.basket.findFirst({
      where: { 
        userId: basketData.userId,
      },
    });
    let basketId = basket?.id


    if (!basket) {
      const new_basket = await prisma.basket.create({
        data: {
          userId: basketData.userId,
        }
      });
      basketId = new_basket.id
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
            connect: {
              id: basketId,
            }
          }
        },
      })
      return NextResponse.json(orderedProduct)
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

}

export async function DELETE() {
  const baskets = await prisma.basket.deleteMany()
  return NextResponse.json(baskets)
}