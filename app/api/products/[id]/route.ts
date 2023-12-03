import { NextRequest, NextResponse } from "next/server";
import getPrismaClient from '../../../../lib/prisma'
import { number, string } from "zod";

const prisma = getPrismaClient()

export const GET = async (req: NextRequest) => {
  try {
    const product_datas = [{id: string, name: string, price: number, priceId: string, image: string, description: string}]
    const id = req.url.split('products/')[1].split('/')[0]
    const basket = await prisma.basket.findFirst({
      where: {
        userId: id
      }
    })
    const orderedProducts = await prisma.orderedProduct.findMany({
      where: {
        basketId: basket?.id
      },
    })
    orderedProducts.map(async (product) => {
      const productData = await prisma.product.findFirst({
        where: {
          id: product.productId
        }
      })
      console.log(product_datas)
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}