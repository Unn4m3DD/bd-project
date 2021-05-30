DROP PROCEDURE `insert_smartphone`;

DELIMITER $$

CREATE PROCEDURE `insert_smartphone`(
  IN `emitter_id` INT,
  IN `app_version` INT, 
  IN `in_browser_version` INT, 
  IN `lang` CHAR(2)
) BEGIN

insert into it2s_db.Emitter values(`emitter_id`, `app_version`)
 on duplicate key update `current_app_version` = `app_version`;
insert into it2s_db.App values(`emitter_id`, `lang`)
 on duplicate key update `configured_language` = `lang`;
insert into it2s_db.Smartphone values(`emitter_id`, `in_browser_version`)
 on duplicate key update `in_browser_version` = `browser_version`;

END $$
DELIMITER ;