Ecommerce Full Stack Project

- hooks folder: Is used for axios to deal with the API (GET, POST, DELETE ...etc)
- hook: Contains all functions and logic
- Page: Contain all the website pages
- components: Contain all components that belong to all pages
- API: Contain our states container
- rootReducer: contains all reducers as combined to send them to the store.js.
- store.js: contains all reducers (combined, middleware,)


steps for creating Redux, connecting to backend - the setup:
Start with redux: this sample is for Admin add brands / panel
- check the endpoint in postman.
- create reducer file. ex: // src > Redux > reducers > brandReducers.
- type.js. ex: export const GET_ALL_BRAND = "GET_ALL_BRAND".  // Redux > type.js
- rootReducer. ex: allBrand: brandReducer. // src > Redux > reducers
- Action. create file to write methods. ex:  // src > Redux > action > brandAction.js
- hook: create folder. ex: brand. // hook > brand
- hook: create a file to contain all logics. ex: // src > hook > home-brand-hook.js
- import the hook in the component and loop over the element to return all items. ex: // src > components > Brand > Brandfeatured.js




homePage
- Home Page branch has the homepage design and style using css and bootstrap

creating router:
- Component > Brand > BrandFeatured.js .. connect the route to the base route in app.js. ex: pathText="/allbrand"
- src > App.js .. add route. ex: <Route path="/allbrand" element={<AllBrandPage />} />
- src > component > Brand > BrandContainer.js .. add all brand cards. ex: <BrandCard img={brand1} /> // BrandCard need to be imported
- src > pages > Brand > AllBrandPage.js .. import BrandContainer

Resource & Links
- https://react-bootstrap.github.io/getting-started/introduction/
- https://fonts.google.com/about
- https://fontawesome.com/         //must register to use it
- https://www.npmjs.com/package/react-router-dom
- https://www.npmjs.com/package/react-paginate
- https://www.npmjs.com/package/unop-react-dropdown
- npmjs.com/package/react-image-gallery
- https://www.npmjs.com/package/react-rating-stars-component
- https://www.npmjs.com/package/multiselect-react-dropdown
- https://react-select.com/home     //not used
- https://react-bootstrap.netlify.app/components/spinners/    
