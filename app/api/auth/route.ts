import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { email, password, action } = await request.json()

    if (action === 'signup') {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (existingUser) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        )
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create new user
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword
        }
      })

      return NextResponse.json({
        id: user.id,
        email: user.email
      })
    }

    if (action === 'login') {
      // Find user
      const user = await prisma.user.findUnique({
        where: { email }
      })

      if (!user) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        )
      }

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        return NextResponse.json(
          { error: 'Invalid password' },
          { status: 401 }
        )
      }

      return NextResponse.json({
        id: user.id,
        email: user.email
      })
    }

  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
} 