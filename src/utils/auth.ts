import * as jwt from "jsonwebtoken";

export const SECRET = "GraphQL" 

export function verifyToken(authHeader: string): string | jwt.JwtPayload {
    const token = authHeader.replace("Bearer ", "");

    if (!token) {
        throw new Error("No token found");
    }
    return jwt.verify(token, SECRET);
}