select distinct hotel_id, hotel_name, rating
from hotel_details
where hotel_id in (select hotel_id from orders where month(order_date) = 7)
order by hotel_id;
