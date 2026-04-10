import { BASE_URL } from "./constants";

const defaultHeaders = {
  "Content-Type": "application/json",
};

async function request(endpoint = "", options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// GET
export function getProducts() {
  return request();
}

// POST
export function createProduct(productData) {
  return request("/add", {
    method: "POST",
    body: JSON.stringify(productData),
  });
}
