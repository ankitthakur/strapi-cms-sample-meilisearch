module.exports = () => ({
  //...
  meilisearch: {
    config: {
      // Your meili host
      host: "http://localhost:7700",
      // Your master key or private key
      apiKey: "",
      episode: {
        settings: {
          searchableAttributes: [
            "title",
            "speaker",
            "eventDate",
            "passage",
            "transcript",
          ],
          displayedAttributes: ["title", "speaker", "eventDate", "passage"],
          entriesQuery: {
            limit: 1000,
          },
        },
      },
    },
  },
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});

//   searchableAttributes: [
//     'title',
//     'overview',
//     'genres'
// ],
// displayedAttributes: [
//     'title',
//     'overview',
//     'genres',
//     'release_date'
// ],
