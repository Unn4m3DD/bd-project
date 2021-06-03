DROP PROCEDURE `get_notification_count`;

DELIMITER $$

CREATE PROCEDURE `get_notification_count`() BEGIN
  select 
    count(*) as `value`
  from notifications;
END $$


DELIMITER ; 