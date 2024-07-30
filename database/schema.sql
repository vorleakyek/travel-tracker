set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table users(
  id serial primary key,
  name varchar(15) unique not null,
  color varchar(15)
);

create table visited_countries(
  id serial primary key,
  country_code char(2) not null,
  user_id integer references users(id)
);
