import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const businesses = await prisma.business.findMany()
    return NextResponse.json(businesses)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch businesses' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const business = await prisma.business.create({
      data: {
        name: data.name,
        type: data.type,
        address: data.address,
        phone: data.phone,
        website: data.website,
        image: data.image,
        description: data.description,
      },
    })
    return NextResponse.json(business)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create business' },
      { status: 500 }
    )
  }
} 