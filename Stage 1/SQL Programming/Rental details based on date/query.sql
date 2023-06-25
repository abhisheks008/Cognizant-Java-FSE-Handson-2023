select rental_id, car_id, customer_id, km_driven 
from rentals 
where extract(month from return_date) = 8
and extract(year from return_date) = 2019; 
