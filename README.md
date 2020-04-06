react-redux-firebase app
quarantine-corner database project documentation

overview:

CLIENT SIDE:
React & Redux
SERVER SIDE:
Firestore database
Firebase authentication
Cloud functions 

REACT COMPONENTS SET UP:
auth: contains anything requiring authentication from firebase (ex, sign in/sign up page)
SignInPage.js — where user signs in
SignUpPage.js — where user signs up
dashboard: main area of page where tables/queries are displayed
Queries.js — where database will be queried/displayed
kits: for adding/deleting “kits”
AddKit.js — for adding a new kit
KitInfo.js — to view more details about kit
KitList.js — list of kits
KitSummary.js — kit module for KitList
layout: header, navbar, footer, etc
Navbar.js — entire navber
SignedInLinks.js — links displayed only when signed in
SignedOutLinks.js — links displayed when signed out

“TABLES” & SCHEMAS:
Users
first name
last name
email
password
state
classification
Kits
name
type
description
rating
created at
user id

WTF IS REDUX AND WHY
one big javascript object basically to store a global state
CENTRAL location to manage all states! one place for all this data!
any component can access data from it!
easy to share data!!!
no data passing or duplication
when data is updated by one component, updates everything else
makes state management v easy
all states in one place, called the “store”
provider takes data from the store and passes down via a container to components (container is glue that connects react to redux)
container fetches necessary app data & sends it to component
any time store/state changes, component automatically re-rendered!
when user interacts (or api call, etc), an action occurs
how does the event change app data? done via actions
decides how change in store occurs via reducers — a function that takes in an action & decides what part of the store to change!
component “requests” data from redux, redux passes the data as props
to make a change: component dispatches an action
action describes the change
action passed to appropriate reducer
reducer takes a look at action & knows where in redux to update
reducer is the one that changes/updates in redux!!!
	

WHEN/WHERE TO CONNECT THE DATABASE?
Asynch code between dispatching action & reducer
Redux middleware (thunk) in action creator
action creators generate an action & returns to function
can halt dispatch & perform asyncs request, then resume




FIREBASE NOSQL DATABASE
collections & documents
table: collection || tuple: document
each document has key-value pairs (attribute-value)
collections: kits, users, notifications (maybe?)
