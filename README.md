#DB DESIGN
- airplane table
- flight table
- AIRPORT
- CITY

A flight belongs to an airplane but one airplane can be used in multiple flights
A city has many airports but one airport belongs to a city
One airport can have multiple flights but one flights belongs to a one airport

#tables

#city->id,name,created_at,updated_at


#airport->id,address,name,city_id,created_at,updated_at

Relationship City has many airports and airport belongs to a city(one to many relationship)

