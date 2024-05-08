# Construction Management Tool

## Overview

This is the front-end repository for a construction management tool designed to help managers oversee business operations. Authorised users are able to carry out the following actions:

- View and amend key business information e.g. contact details, business description, social media links.
- View, create, edit and delete jobs. All jobs are associated with a particular service category.
- View, create, edit and delete service categories. Deleting a service category deletes all associated jobs.

The application can be visited using [this link](http://4.234.160.181:9090/). Please note that valid user credentials are needed to access the full range of features, as this app is principally designed for internal business management.

For this project, I have paired up with a colleague - Chris - who has taken responsibility for server-side development. The back-end repository can be viewed [here](https://github.com/ChrisRistoff/Construction-Backend), and our API documentation is available on [Swagger](http://4.234.160.181:8080/swagger/index.html).

## Tech Stack

The front end of this application is built in React with TypeScript and vanilla CSS. Redux Toolkit has been used for the requisite Redux logic, including RTK Query for data fetching and caching.