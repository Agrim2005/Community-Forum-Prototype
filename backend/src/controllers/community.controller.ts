import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/index.js";
import type {
  CreateCommunityRequest,
  UpdateCommunityRequest,
} from "../types/community.types.js";
import {
  createCommunity as createCommunityService,
  getCommunities as getCommunitiesService,
  getCommunityById as getCommunityByIdService,
  joinCommunity as joinCommunityService,
  leaveCommunity as leaveCommunityService,
  updateCommunity as updateCommunityService,
} from "../services/community.service.js";

export const createCommunity = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = req.body as CreateCommunityRequest;

  const community = await createCommunityService(data);

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: community,
  });
};

export const getCommunities = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const communities = await getCommunitiesService();

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: communities,
  });
};

export const getCommunityById = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const community = await getCommunityByIdService(
    req.params.id,
  );

  if (!community) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Community not found",
    });
    return;
  }

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: community,
  });
};

export const updateCommunity = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const data = req.body as UpdateCommunityRequest;

  const community = await getCommunityByIdService(
    req.params.id,
  );

  if (!community) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Community not found",
    });
    return;
  }

  const updatedCommunity = await updateCommunityService(
    req.params.id,
    data,
  );

  res.status(HTTP_STATUS.OK).json({
    status: "success",
    data: updatedCommunity,
  });
};

export const joinCommunity = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  const community = await getCommunityByIdService(
    req.params.id,
  );

  if (!community) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "Community not found",
    });
    return;
  }

  const membership = await joinCommunityService(
    userId,
    req.params.id,
  );

  res.status(HTTP_STATUS.CREATED).json({
    status: "success",
    data: membership,
  });
};

export const leaveCommunity = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  const userId = res.locals.userId as string;

  try {
    await leaveCommunityService(
      userId,
      req.params.id,
    );

    res.status(HTTP_STATUS.OK).json({
      status: "success",
      message: "Left community successfully",
    });
  } catch {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      status: "error",
      message: "You are not a member of this community",
    });
  }
};