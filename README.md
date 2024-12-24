Logout Logic
  This module provides secure user logout functionality using Express.js. It handles the removal of authentication tokens (access and refresh tokens) stored in       cookies when a user logs out.

Features:
  Token Removal: Clears the refreshToken from the user's record in the database upon logout.
  Secure Process: Tokens are cleared from cookies with httpOnly and secure flags to ensure security.
  JWT Verification: Ensures that only authenticated users can log out by verifying the JWT token before logout.

  
How it Works:
  JWT Verification: The verifyJWT middleware validates the JWT token from the cookies or Authorization header.
  Token Deletion: If the token is valid, the logoutUser controller removes the refreshToken from the database and clears the cookies.
  Response: The server responds with a success message confirming the user is logged out.

  
Installation:
  Install Express.js and jsonwebtoken:
  npm install express jsonwebtoken

  
Use the middleware and controller in your routes:

  import { verifyJWT } from './middleware/auth.middleware.js';
  import { logoutUser } from './controllers/userController.controller.js';
  app.post('/logout', verifyJWT, logoutUser);

  
Security:
  HttpOnly Cookies: Tokens are stored in cookies with the httpOnly flag to prevent client-side access.
  Secure Flag: Cookies are sent only over HTTPS for added security.
  This version is more concise while still covering the key details. Let me know if you need any further adjustments!
