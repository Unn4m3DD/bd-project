DROP PROCEDURE `insert_app`;

DELIMITER $$

CREATE PROCEDURE `insert_app`(
  `emitter_id` INT, 
  `app_version` INT, 
  `lang` CHAR(2)
) BEGIN
insert into it2s_db.Emitter values(`emitter_id`, `app_version`);
insert into it2s_db.APP values(`emitter_id`, `lang`);

END $$
DELIMITER ;