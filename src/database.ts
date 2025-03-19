import { PrismaClient } from '@prisma/client';

/**
 * only user Server Side
 */
const database = new PrismaClient();

export default database as PrismaClient;
