select distinct users.name, users.address
from users, bookingdetails
where users.user_id = bookingdetails.user_id
and users.user_id not in (select user_id from bookingdetails where name = 'HDFC')
order by users.name;
