import * as authService from "../service/authService.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const result = await authService.loginUser(email, password);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    return res.json({
      email: result.existingUser.email,
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};
