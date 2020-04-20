
# quarantine corner

#### What is it?
Quarantine corner is a website where people can submit "kits," which are just little suggestions about things to do during quarantine! There are different types of kits, such as: food/drinks, games, music, etc. Anyone can browse the kits, and see all the contributors who have submitted kits. However, to submit a kit and like a kit (to "save" and add it to your "liked kits"), an account must be created.

★ [Click here to visit!](https://quarantine-corner.firebaseapp.com/) ★

## Implementation.
This web app is built via React-Redux-Firebase.

**Client Side:** React & Redux
**Server Side:** Google Firebase (authentication)/Firestore (database)

###  React Components Set Up.

- **auth folder:** contains anything requiring authentication from firebase (ex, sign in/sign up page)
 -- **SignInPage.js** — where user signs in
-- **SignUpPage.js** — where user signs up
- **dashboard folder:** main area of page where tables/queries are displayed
-- **Queries.js** — (HOMEPAGE) where kits from database will be queried/displayed
- **kits folder:** for adding/deleting “kits”
-- **AddKit.js** — for adding a new kit
-- **KitCard.js** — holds at-a-glance summary of kit
-- **KitInfo.js** — modal holding all details about kit
-- **AllKit.js** — list of all kits
-- **SearchTypeKit.js** — queries kits by type
-- **SearchUserKit.js** — queries kits by username
- **layout folder:** header, navbar, footer, etc
-- **Navbar.js** — entire navber
-- **SignedInLinks.js** — links displayed only when signed in
-- **SignedOutLinks.js** — links displayed when signed out
- **users folder:** components related to users/user information
-- **UserProfile.js** — signed in user information, their submitted kits, and liked kits
-- **AllUsers.js** — displays all users from the database
-- **UserKits.js** — displays all the kits of a given user (when clicked on from AllUsers)

### Firestore NoSQL Database

Organized as collections & documents.
- table: collection
- tuple: document
- each document has key-value pairs (attribute-value)

### "Tables" & Schemas:

**users:**
- id
- first name
- last name
- email
- password
- state
- classification

**kit**
- id
- name
- type
-- arts/diy
-- health/exercise
-- food/drinks
-- games
-- movies/tv
-- music
- description
- rating
- created at
- user id

**likes** (a sub-collection of the users collection) **NOTE:** this sub-collection is ONLY fetchedif a user is logged in!!!
- id (matches a kit id)
- like



### Redux.

Redux is essentially one big javascript object to store a global state. This provides a CENTRAL location to manage all states! One place for all of this data!
Any component can access data from it. This makes it easy to share data -- no data passing or duplication.
When data is updated by one component, all other components using this data is automatically updated. This makes state management very easy.
All states are in one place, called the “store”. the provider takes data from the store and passes it down via a container to all the components (the container is like glue that connects react to redux).
The container fetches necessary app data & sends it to component.
Any time store/state changes, the component automatically re-rendered!
When a user interacts (or api call, etc), an action occurs.
How does the event change app data? Via actions. Redux decides how to change data in store occurs via reducers — a function that
takes in an action & decides what part of the store to change!
A component “requests” data from redux, and redux passes the data as props. 
To make a change: component dispatches an action. Action describes the change. Action is passed to the appropriate reducer. The reducer takes a look at the action & knows where in redux to update. It is the reducer that changes/updates in redux!!!

#### Some general rules/things to keep in mind:

1. When changing data in db: dispatch an action, so mapDispatchToProps.
2. When retrieving data from db, want to sync local state, so mapStateToProps.


### When/where to connect the database?

1. Redux connects to the firestore database
2. Asynch code between dispatching action & reducer
3. Redux middleware (thunk) in action creator
4. Action creators generate an action & returns to function
5. Can halt dispatch & perform asyncs request, then resume

#### An Example: How the "likes" subcollection works:

**NOTE:** Only works when logged in.
1. Fetches “likes” sub collection from firestore based on user ID
2. When click “like,” dispatches user info (of logged in user) and kit info (of kit that was like), and uses the user’s ID to add to the user’s “likes” sub collection
3. Stores/updates a boolean variable called “like” to true/false (depending on if liked or unliked)
4. Stores kitId (so liked kits can be mapped back to kits collection & displayed on user’s profile page)

## Deployment.

*deploy app from public folder, dist*
run: **npm run build**
rename build folder to dist
run: **firebase deploy**


