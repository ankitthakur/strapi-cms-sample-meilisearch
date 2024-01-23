/**
 * A set of functions called "actions" for `customsearch`
 */

import { customsearch } from "../services/customsearch";

export default {
  exampleAction: async (ctx, next) => {
    try {
      // Assuming the search query is provided as a query parameter in the URL
      const query = ctx.request.query.query;

      if (!query) {
        // If the query is not provided, handle the error
        ctx.status = 400; // Bad Request
        ctx.body = { error: 'Search query is missing.' };
        return;
      }

      // Perform the search using the customsearch service
      const searchResponse = await customsearch.searchString(query);

      // Set the HTTP status code and respond with the search results
      ctx.status = 200; // OK
      ctx.body = searchResponse;
    } catch (err) {
      // If an error occurs during the search, handle it and respond with an error message
      ctx.status = 500; // Internal Server Error
      console.log(err)
      ctx.body = { error: 'Internal server error during search.' };
    }
  }
};
