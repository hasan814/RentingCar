export async function fetchCars() {
  const headers: Record<string, string> = {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY || "",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  if (!headers["x-rapidapi-key"]) {
    console.error("RAPIDAPI_KEY is not set in the environment variables");
    return null;
  }

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      { headers: headers }
    );

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Error: ${response.status} ${response.statusText} - ${errorDetails}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return null;
  }
}
