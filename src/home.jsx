// import React from "react";

// const home = () => {
//   const name = "John";
//   const [x, y] = [10, 50];
//   const names = ["a", "b", "c"];
//   const loggedIn = false;
//   const styles = {
//     color: "green",
//     fontSize: "24px",
//     fontStyle: "italic",
//   };
//   //   if (loggedIn) {
//   //     return <h1>Hello friends</h1>;
//   //   } else {
//   //     return <p>Hello world!!</p>;
//   //   }

//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p>
//         This is {x} plus {y} and this is equal {x + y}
//       </p>
//       {/* <ul style={{ color: "red", fontSize: "12rem", fontStyle: "italic" }}> */}
//       <ul style={styles}>
//         {names.map((x, index) => (
//           <li key={index}>{x}</li>
//         ))}
//       </ul>
//       {loggedIn ? <p>Hello world</p> : <p>No worries</p>}
//     </div>
//   );
// };

// export default home;
import React from "react";
import Star from "./components/Star";
import Catalyzer from "./components/Catalyzer";

function home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Star />
          <Catalyzer
            title="Each of these attributes takes a URL to issue an AJAX request to. The element will issue a request of the specified type to the given URL when the element is triggered"
            subtitle="Harrison animation options used above"
          />
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                The 400 Blows
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
    </div>
  );
}

export default home;
