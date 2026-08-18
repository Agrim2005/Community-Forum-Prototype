import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";
import { hashPassword } from "../src/utils/hash.js";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const password = await hashPassword("Password123!");

  const user = await prisma.user.upsert({
    where: {
      email: "demo@communityforum.com",
    },
    update: {},
    create: {
      name: "Demo User",
      username: "demo_user",
      email: "demo@communityforum.com",
      password,
      bio: "Development account for Community Forum",
      location: "India",
    },
  });

  const community = await prisma.community.upsert({
    where: {
      name: "General Discussion",
    },
    update: {},
    create: {
      name: "General Discussion",
      description: "A place for general community discussions.",
      category: "General",
      featured: true,
    },
  });

  await prisma.communityMember.upsert({
    where: {
      userId_communityId: {
        userId: user.id,
        communityId: community.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      communityId: community.id,
    },
  });

  const existingPost = await prisma.post.findFirst({
    where: {
      authorId: user.id,
      content: "Welcome to the Community Forum!",
    },
  });

  if (!existingPost) {
    await prisma.post.create({
      data: {
        content: "Welcome to the Community Forum!",
        authorId: user.id,
        communityId: community.id,
      },
    });
  }

  const testUser = await prisma.user.upsert({
    where: {
      email: "test@communityforum.com",
    },
    update: {},
    create: {
      name: "Test User",
      username: "test_user",
      email: "test@communityforum.com",
      password,
    },
  });

  if (testUser) {
    const existingMembership = await prisma.conversationMember.findFirst({
      where: {
        userId: user.id,
        conversation: {
          participants: {
            some: {
              userId: testUser.id,
            },
          },
        },
      },
    });

    if (!existingMembership) {
      const conversation = await prisma.conversation.create({
        data: {
          participants: {
            create: [
              {
                userId: user.id,
              },
              {
                userId: testUser.id,
              },
            ],
          },
        },
      });

      await prisma.message.create({
        data: {
          text: "Welcome to the Community Forum!",
          senderId: user.id,
          conversationId: conversation.id,
        },
      });
    }

    const existingNotification = await prisma.notification.findFirst({
      where: {
        userId: testUser.id,
        title: "Welcome",
      },
    });

    if (!existingNotification) {
      await prisma.notification.create({
        data: {
          title: "Welcome",
          message: "Welcome to the Community Forum!",
          userId: testUser.id,
        },
      });
    }
  }

  console.log("Database seed completed successfully.");
}
main()
  .catch((error) => {
    console.error("Database seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });