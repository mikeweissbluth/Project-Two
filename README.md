# My Neighborhood Health Application

## Overview
The My Neighborhood Health application was created to raise awareness of toxic chemical facilities in the Illinois area. A user can peruse the Illinois map to identify toxic chemical facilities locations and can link out to learn more about each toxic chemical.  

## User Experience
* On page load, the user can see a map of Illinois with orange markers representing facilities that work with toxic chemicals. 
* User can hover over or click on the orange markers to get more information about the TRI Facility. 
    * Name of TRI Facility
    * List of toxic chemicals at site
    * Links to learn more about each toxic chemical
    * Chemicals known Carcinogenic
    * Compliance History
    * Count of users who have checked in as a neighbor of each site
    * Ability to check in as a neighbor of each site

## Application Development
This application was built using the following NPM Packages: body-parser, express, mysql and sequelize. The frontend uses the Google Maps API and some bootstrap for styling. The database for this application was built in MySQL Workbench using data from the TOXNET Web Service API. 

GitHub: https://github.com/AlexRubes/Project-Two