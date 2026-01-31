export const fetchProducts = async () => {
    const response = await fetch("https://marma-task-server.vercel.app/api/products");

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
};
