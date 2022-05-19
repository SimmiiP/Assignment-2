# Assignment 2 - Web API

Name: Oluwasimisola Popoola

## Features. 

+ I fixed the path to the actors images so now they show up
+ I fixed the actor filter card so now it filters the actors by name
+The signup page lets you create an account 
+The login page lets you log into that account
+ When you favorite movies they save to your account and so you can log out and log back in and see your favorites.
+ The filter movies card filters through your favorites to your new movies
+ I added a now playing page that shows movies currently in cinemas.
+ I added a also watch page which takes you to recommended movies

## Setup Requirements 

N/A

## API Configurations

You will need to make a .env file for the api with this information in it. 
NODEENV=development
PORT=8080
HOST= localhost
mongoDB= mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
seedDb=true
secret=YourJWTSecret
REACT_APP_TMDB_KEY=

and a .env file for the movies app with this information in it 

REACT_APP_TMDB_KEY=
FAST_REFRESH=false

## API DESIGN
+ /api/movies  GET  Gets a list of movies 
+ /api/movies/{movieid}  GET  Gets a single movie
+ /api/users  GET Gets the users with accounts
+ /api/users/favourites GET Gets the users favorites 
+ /api/users/rated Gets the users rated movies 

## SECURITY AND AUTHENTICATION
+ Accounts are password protected 
+ Passwords need to be 8 characters long
+ Passwords require a number as well
+ Below are the protected routes on the app:
+ "/movies/favorites" 
+ "/movies/rated" 
+ "/movies/playlist"
+ "/reviews/:id"
+ "credits/:id" 
+ users request a JWT Token which they sends with all requests to verify their identity

## INTERGRATING WITH REACT APP

## INDEPENDANT LEARNING
+ I tried adding a popup for when a password is incorrect but i couldnt get it working and i didn't leave the code in as it caused errors with signup 