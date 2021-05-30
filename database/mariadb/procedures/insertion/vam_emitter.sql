DROP PROCEDURE `insert_smartphone`;

DELIMITER $$

CREATE PROCEDURE `insert_smartphone`(
  IN `emitter_id` INT,
  IN `app_version` INT, 
  IN `last_power_status` INT, 
  IN `lang` CHAR(2)
) BEGIN

insert into it2s_db.Emitter values(`emitter_id`, `app_version`) 
insert into it2s_db.APP values(`emitter_id`, `lang`);
insert into it2s_db.Smartphone values(`emitter_id`, `last_power_status`)

END $$
DELIMITER ;