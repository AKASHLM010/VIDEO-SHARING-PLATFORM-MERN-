const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

// Why Return req, res, and next
// By returning a function with the signature (req, res, next), asyncHandler ensures that the resulting function can be used as a standard Express route handler. This returned function does the following:

// 1. Accepts the Same Parameters: It takes req, res, and next, just like any other Express middleware or route handler.
// 2. Executes the Original Handler: It calls the requestHandler with req, res, and next.
// 3. Handles Errors Automatically: It catches any errors from the requestHandler and passes them to next, which triggers the error-handling middleware.

export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// EXAMPLE:

// Without asyncHandler:

// app.get('/route', async (req, res, next) => {
//     try {
//         // Asynchronous code that might throw an error
//         const data = await someAsyncFunction();
//         res.send(data);
//     } catch (err) {
//         // Pass the error to Express error handler
//         next(err);
//     }
// });
// With asyncHandler:


// app.get('/route', asyncHandler(async (req, res, next) => {
//     // Asynchronous code
//     const data = await someAsyncFunction();
//     res.send(data);
// }));
// Using asyncHandler reduces boilerplate code and ensures consistent error handling across all routes.