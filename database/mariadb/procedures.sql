CREATE PROCEDURE `filterTodo`(IN done BOOLEAN) BEGIN
SELECT *
FROM todos
WHERE completed = done;
END