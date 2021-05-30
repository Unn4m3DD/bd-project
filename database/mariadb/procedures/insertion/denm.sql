DROP PROCEDURE `insert_denm`;

DELIMITER $$

CREATE PROCEDURE `insert_denm`(
  IN `emitter_id` INT, 
  IN `timestamp` INT, 
  IN `cause_code` INT, 
  IN `sub_cause_code` INT, 
  IN `latitude` INT, 
  IN `longitude` INT, 
  IN `duration` INT, 
  IN `quadtree` BIGINT
) BEGIN
insert into it2s_db.DENM values(
  `emitter_id`, 
  `timestamp`, 
  `cause_code`, 
  `sub_cause_code`, 
  `abs_speed`, 
  `latitude`, 
  `longitude`, 
  `duration`, 
  `quadtree`
);

END $$
DELIMITER ;