import { PrismaClient } from "@prisma/client";

export class ReviewsDB {    
    async getReviewsForSession(id: string) {
        const prisma = new PrismaClient();
        try {
            return prisma.review.findMany({
                where: {
                    sessionId: `${id}`
                }
            });
        } finally {
            await prisma.$disconnect();
        }
    }
}
