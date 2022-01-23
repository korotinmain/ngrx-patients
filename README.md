- A button on each route: orders, patients should fetch data from a mock API
### Patients: https://api.mocki.io/v2/51597ef3
### Orders: https://api.mocki.io/v2/79fb05cb

#Requirements

- The result should be displayed in a list
- A button to "favorite" should appear on each item row
- Add a third route that shows the items the user added to their favorites list
(item can't be duplicated in the favorites list, item should be marked that it's in the favorites list)
- In the favorites-list route - a button on each item should remove the item from the list
- Should use ngrx

- Bonus 1: The favorites list should be filterable by a form input that filters
         by firstName (patient) / orderName (order)
- Bonus 2: Please make it look nice

Estimation:

# Changes
- Added file extension to README .md
- Changed tsconfig.json paths
- Created OrdersService and added request method
- Created PatientsService and added request method
- Added favorites' router with lazy loading
- Added Orders components with actions/reducers/selectors
- Added Patients components with actions/reducers/selectors
- Added Favorites components with actions/reducers/selectors
- Created HTML for patients/orders/favorites and reflected data from API
- Added favorites logic
