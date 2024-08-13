import React, { Suspense } from "react";
import Vegetables from "../utils/grocery.js";

// Lazy load the Grocerycard component
const Grocerycard = React.lazy(() => import("./Grocerycard"));

const Grocery = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-3  sm:grid-col-2 bg-[#0f172a] p-4 gap-2">
        {/* Add a Suspense component with a fallback while loading */}
        <Suspense fallback={<div>Loading...</div>}>
          {Vegetables.map((vegetable, index) => {
            // Use the img path from the Vegetables array
          
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
    </>
  );
};

export default Grocery;
