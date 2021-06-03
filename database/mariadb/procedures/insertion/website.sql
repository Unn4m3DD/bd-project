DROP PROCEDURE `insert_website`;

DELIMITER $$

CREATE PROCEDURE `insert_website`(
  IN `emitter_id` BIGINT,
  IN `app_version` BIGINT, 
  IN `in_browser_name` varchar(32), 
  IN `in_browser_version` varchar(64), 
  IN `lang` CHAR(2)
) BEGIN

insert into it2s_db.Emitter values(`emitter_id`, `app_version`)
 on duplicate key update current_app_version = `app_version`;
insert into it2s_db.App values(`emitter_id`, `lang`)
 on duplicate key update `configured_language` = `lang`;
insert into it2s_db.WebSite values(`emitter_id`, `in_browser_name`, `in_browser_version`)
 on duplicate key update browser_version = `in_browser_version`, browser_name = `in_browser_name`;

END $$
DELIMITER ;