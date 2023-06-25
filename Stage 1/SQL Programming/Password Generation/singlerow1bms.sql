select name, concat(left(name, 3), left(phno, 3)) as password
from users
order by name;
