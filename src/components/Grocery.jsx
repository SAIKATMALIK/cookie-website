import React, { Suspense, useEffect } from "react";
import Vegetables from "../utils/grocery.js";

// Lazy load the Grocerycard component
const Grocerycard = React.lazy(() => import("./Grocerycard"));

const Grocery = () => {
  useEffect(() => {
    const calltheimageapi = async () => {
      const imageFetchPromises = vegetables.map(async (vegetable) => {
        try {
          const response = await fetch(vegetable.img);
     
        } catch (error) {
          console.error("Failed to fetch image:", error);
        }
      });

      await Promise.all(imageFetchPromises);
    };

    calltheimageapi();
  }, []); // Empty dependency array to avoid infinite loops

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-3 sm:grid-col-2 bg-[#0f172a] p-4 gap-2">
      {/* Add a Suspense component with a fallback while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {Vegetables.map((vegetable, index) => {
          return (
            <Grocerycard
              key={index}
              name={vegetable.name}
              price={vegetable.priceForOneKg}
              image={vegetable.img}
            />
          );
        })}
      </Suspense>
    </div>
  );
};

export default Grocery;
