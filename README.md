# React Data Grid CRUD Operations with Fetch API

## Repository Description

Practical React + Express sample demonstrating server-side CRUD for a data grid using the Fetch API.

## Overview

This sample application demonstrates how to implement full server-side CRUD (Create, Read, Update, Delete) operations in a React application using the Fetch API and an Express backend. It highlights how grid-level events, such as `dataSourceChanged`, can be used to synchronize user actions in a React data grid with RESTful API endpoints.

The project showcases a clean separation between the UI layer and data access logic by using a lightweight Fetch-based service. When users add, edit, or delete records in the grid, the corresponding HTTP requests are triggered and processed by the Express server, ensuring data consistency between the client and server.

## Features

- Server-side CRUD (Express REST endpoints)
- Fetch-based client service for API calls
- Integration with a React data grid using grid events
- Runnable demo with sample data

## Prerequisites

Before running this application, ensure you have the following installed and basic familiarity with the listed technologies:

- Node.js (LTS version recommended)
- npm (comes bundled with Node.js)
- Basic understanding of React and functional components
- Familiarity with REST APIs and HTTP methods (GET, POST, PUT, DELETE)
- A modern web browser (Chrome, Edge, or Firefox) for testing

## Running the Application

1. Clone the repository:

```cmd
git clone https://github.com/ramyarajendran27/handling-crud-actions-using-fetch-api-and-react-grid-events.git
```

2. Navigate to the project folder:

```cmd
cd handling-crud-actions-using-fetch-api-and-react-grid-events
```

3. Install dependencies:

```cmd
npm install
```

3. Start the development server:

```cmd
npm run serve
```

## Quick Usage

Start the app and open it in the browser. The grid reads data from the Express API and sends add/edit/delete requests via the included service.

## Resources

- Video: https://www.youtube.com/watch?v=lGEPmY0bOws
- Guide: http://bit.ly/2R2TY3E
