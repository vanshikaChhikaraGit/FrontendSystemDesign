# 1. fetch data from an api
  -> we will load data in batches with the help of page_number and limit parameters.
  -> page_number loads a new set and limit tells how many posts to load from the specified set.

# 2. Intersection Observer API
  -> after initial fetch and render we need to load more data and show on the webpage.
  -> when? if the user reaches the end of the current feed.
  -> how do we find if user has reached a particular position on the web page and now needs to have a fresh set
  of post without clicking any next page kind of thing.

  -> One Way is we apply scroll event listeners and manually calculate the position of dom elements
  with respect to its ancestors and viewport.

  -> Another effective way is using Intersection Observer Api,it allows us to asynchronously observe changes in the intersection of a target element with an ancestor element or the viewport.
  