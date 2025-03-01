const API_URL = process.env.REACT_APP_API_URL;  // Fetch the backend URL from .env

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Something went wrong!" };
  }
};
