/**
 * customsearch service
 */

// export default () => ({});

import { MeiliSearch, MultiSearchParams, MultiSearchQuery } from 'meilisearch';

const meilisearch = new MeiliSearch({ host: 'http://localhost:7700' });

export const customsearch = {
  searchString: async (query: string) =>{
    try {
      console.log("service search string:");
      console.log(query);

      // Assuming you have a valid 'index' and 'emptyIndex' instances
      const { results } = await meilisearch.getRawIndexes();

      const multiSearchQueries: MultiSearchParams = { queries: [] };

      for (const result of results) {
        const mMultiSearchQuery: MultiSearchQuery = {
          indexUid: result.uid,
          q: query,
        };

        multiSearchQueries.queries.push(mMultiSearchQuery);
      }

      const searchResults = await meilisearch.multiSearch(multiSearchQueries);
      console.log("results are");
      console.log(searchResults);

      return searchResults;
    } catch (error) {
      console.error('Error while searching in Meilisearch:', error);
      throw new Error('Error while searching in Meilisearch.');
    }
  },
};

