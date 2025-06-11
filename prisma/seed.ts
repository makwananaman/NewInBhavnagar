import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.business.deleteMany()

  // Create sample businesses
  await prisma.business.createMany({
    data: [
      {
        name: "Spice Haven Restaurant",
        type: "Restaurant",
        
        address: "123 Main Street, Bhavnagar",
        phone: "+91 1234567890",
        website: "www.spicehaven.com",
        image: "/placeholder.svg?height=200&width=300",
        description: "Authentic Indian cuisine in the heart of Bhavnagar"
      },
      {
        name: "TechGenius Electronics",
        type: "Electronics Store",
        address: "456 Tech Lane, Bhavnagar",
        phone: "+91 9876543210",
        website: "www.techgenius.com",
        image: "/placeholder.svg?height=200&width=300",
        description: "Your one-stop shop for all electronics needs"
      },
      {
        name: "Green Oasis Park",
        type: "Public Park",
        address: "789 Park Road, Bhavnagar",
        phone: "+91 8765432109",
        website: "www.greenoasispark.com",
        image: "/placeholder.svg?height=200&width=300",
        description: "A peaceful retreat in the city"
      }
    ]
  })

  // Create admin user
  await prisma.user.create({
    data: {
      email: 'newinbhavnagar@gmail.com',
      password: await bcrypt.hash('12345', 10)
    }
  })

  console.log('Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 