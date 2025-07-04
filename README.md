Product Pagination App
A clean React application that displays products fetched from dummyjson.com with incremental loading. Users can browse the catalog using a “Load More” button, which dynamically appends more products to the list.


 # Product Pagination App

A React-based product listing interface that fetches product data from an external API and displays it with incremental loading. Instead of traditional pagination, this app uses a "Load More" approach to append more products as the user interacts.

## Features

- Fetches product data from [dummyjson.com](https://dummyjson.com)
- Displays products in a scrollable card layout
- "Load More" button to append more items
- Responsive and minimal user interface

## Live Demo

[https://product-pagination.vercel.app](https://product-pagination.vercel.app)

## Tech Stack

- React (with Hooks)
- CSS for basic styling
- [dummyjson.com](https://dummyjson.com) API for product data

## Concepts Used

- `useEffect` for fetching data
- `useState` for managing product data and batch size
- Array slicing to control the number of visible items
- Conditional rendering of the Load More button

## Getting Started

To run this project locally:

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/product-pagination.git
