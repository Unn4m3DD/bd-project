select table_schema,
       table_name,
       constraint_name
from information_schema.table_constraints
where constraint_type = 'CHECK'
order by table_schema,
         table_name;