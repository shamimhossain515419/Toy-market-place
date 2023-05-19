import useTitle from "../../../Hooks/useTitle";


const Blog = () => {
     useTitle('blog')
     return (
          <div className=" bg-[#e686867d] space-y-4">
              <div className=" p-2">
                 <h1 className=" text-2xl font-semibold my-3">1. What is an access token and refresh token? </h1>
                <p className=" text-base font-normal my-3"> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
               </div>  
              <div className=" p-2">
                 <h1 className=" text-2xl font-semibold my-3">2. Wow do they work and where should we store them on the client-side? </h1>
                <p className=" text-base font-normal my-3">1. A refresh token is a concept commonly used in authentication and authorization systems to obtain new access tokens without requiring the user to reauthenticate. It helps maintain long-term user sessions and improves security by minimizing the exposure of access tokens.</p>
                <p className=" text-base font-normal my-3">2. They should be stored in the cookies storage</p>
               </div>  
              <div className=" p-2">
                 <h1 className=" text-2xl font-semibold my-3">3. Compare SQL and NoSQL databases? </h1>
               <p className=" text-base font-normal my-3">SQL(Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that differ in their data models, scalability, query languages, and use cases.
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
               </div>  
              <div className=" p-2">
                 <h1 className=" text-2xl font-semibold my-3">4.What is express js?</h1>
               <p className=" text-base font-normal my-3">Express.js is a fast and minimalist web application framework for Node.js, a popular JavaScript runtime. It provides a robust set of features and tools for building web applications and APIs. Express.js simplifies the process of creating server-side applications by providing a thin layer of abstractions over Node.js's core HTTP module.</p>
               </div>  
              <div className=" p-2">
                 <h1 className=" text-2xl font-semibold my-3">5.What is Nest JS? </h1>
               <p className=" text-base font-normal my-3">NestJS is a popular, open-source framework for building scalable and efficient server-side applications using Node.js. It is designed to provide a solid architectural foundation and enable developers to create modular, maintainable, and testable applications.</p>
               </div>  
              <div className=" p-2">
                 <h1 className=" text-2xl font-semibold my-3">6.What is MongoDB aggregate and how does it work</h1>
               <p className=" text-base font-normal my-3">An important consideration with the Aggregation Framework is that an index can only be used to fetch the initial data for a pipeline (e.g. usage of $match, $sort, $geonear at the beginning of a pipeline) as well as subsequent $lookup and $graphLookup stages. Once data has been fetched into the aggregation pipeline for processing (e.g. passing through stages like $project, $unwind, and $group) further manipulation will be in-memory (possibly using temporary files if the allowDiskUse option is set).</p>
               </div>  
          </div>
     );
};

export default Blog;