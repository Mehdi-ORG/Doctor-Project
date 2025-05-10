import axios from "axios";

const API_URL = "http://localhost:5000";

export const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );
      return user;
    } catch (error) {
      throw new Error("خطا در ارتباط با سرور");
    }
  },
};
