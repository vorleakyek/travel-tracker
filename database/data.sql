
insert into users (name, color)
values ('Bear', 'teal'), ('Panda', 'orange');

insert into visited_countries (country_code, user_id)
values ('FR', 1), ('GB', 1), ('CA', 2), ('FR', 2);

select *
from visited_countries
join users
on users.id = user_id;
