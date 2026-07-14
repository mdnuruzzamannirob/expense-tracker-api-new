// import { ACCESS_COOKIE } from '@/utils/cookies.js'
// import type { NextFunction, Request, Response } from 'express'

// export const authenticate = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const header = req.headers.authorization
//   const headerToken = header?.startsWith('Bearer ')
//     ? header.slice(7)
//     : undefined

//   const cookieToken = (req.cookies as Record<string, string> | undefined)?.[
//     ACCESS_COOKIE
//   ]
//   const token = cookieToken || headerToken

//   if (!token) {
//     return next(new AppError(401, 'Authentication token is required'))
//   }
// }
