import { prisma } from "../config/database.js";
import type {
  CreateCommunityRequest,
  UpdateCommunityRequest,
} from "../types/community.types.js";

export const createCommunity = async (
  data: CreateCommunityRequest,
) => {
  return prisma.community.create({
    data: {
      name: data.name,
      description: data.description,
      category: data.category,
      image: data.image,
      featured: data.featured ?? false,
    },
  });
};

export const getCommunities = async () => {
  return prisma.community.findMany({
    include: {
      _count: {
        select: {
          members: true,
          posts: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getCommunityById = async (
  id: string,
) => {
  return prisma.community.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          members: true,
          posts: true,
        },
      },
    },
  });
};

export const updateCommunity = async (
  id: string,
  data: UpdateCommunityRequest,
) => {
  return prisma.community.update({
    where: { id },
    data,
  });
};

export const joinCommunity = async (
  userId: string,
  communityId: string,
) => {
  return prisma.communityMember.upsert({
    where: {
      userId_communityId: {
        userId,
        communityId,
      },
    },
    update: {},
    create: {
      userId,
      communityId,
    },
  });
};

export const leaveCommunity = async (
  userId: string,
  communityId: string,
) => {
  return prisma.communityMember.delete({
    where: {
      userId_communityId: {
        userId,
        communityId,
      },
    },
  });
};