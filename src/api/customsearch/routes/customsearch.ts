export default {
  routes: [
    {
     method: 'GET',
     path: '/customsearch',
     handler: 'customsearch.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
