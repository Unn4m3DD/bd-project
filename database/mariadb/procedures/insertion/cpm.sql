
DELIMITER ;
DROP PROCEDURE insert_cpm;
DROP PROCEDURE insert_perceived_object;
DROP FUNCTION it2s_db.getObjectLatitude;
DROP FUNCTION it2s_db.getObjectLongitude;
DROP FUNCTION it2s_db.getObjectAbsSpeed;


CREATE FUNCTION it2s_db.getObjectLatitude (
  `rsu_latitude` BIGINT, 
  `object_yDistance` INT
) RETURNS BIGINT
  return (
    `rsu_latitude` / 10000000.0 + (`object_yDistance` / 100.0 / 6371000) * (180 / PI())
  ) * 10000000;


CREATE FUNCTION it2s_db.getObjectLongitude (
  `rsu_latitude` BIGINT,
  `rsu_longitude` BIGINT,
  `object_xDistance` INT
) RETURNS BIGINT 
  return ((
    `rsu_longitude` / 10000000.0 + (`object_xDistance` / 100.0 / 6371000) * (180 / PI()) / COS(`rsu_latitude` / 100.0 * PI())
  ) * 10000000);

CREATE FUNCTION it2s_db.getObjectAbsSpeed (`xSpeed` INT, `ySpeed` INT) RETURNS INT 
  return SQRT(Power(`xSpeed`, 2) + Power(`ySpeed`, 2));

DELIMITER $$

CREATE PROCEDURE `insert_cpm`(
  `emitter_id` INT,
  `timestamp` INT,
  `latitude` INT,
  `longitude` INT,
  `quadtree` BIGINT
) BEGIN
  insert into it2s_db.CPM
  values(
    `emitter_id`,
    `timestamp`,
    `latitude`,
    `longitude`,
    `quadtree`
  );
END $$

CREATE PROCEDURE `insert_perceived_object` (
  `emitter_id` INT,
  `current_timestamp` INT,
  `objectID` INT,
  `cpm_latitude` INT,
  `cpm_longitude` INT,
  `quadtree` BIGINT,
  `xDistance` INT,
  `yDistance` INT,
  `xSpeed` INT,
  `ySpeed` INT
) BEGIN
  insert into it2s_db.PerceivedObject
  values(
    `emitter_id`,
    `current_timestamp`,
    `objectID`,
    it2s_db.getObjectLatitude(`cpm_latitude`, `yDistance`),
    it2s_db.getObjectLongitude(`cpm_latitude`, `cpm_longitude`, `xDistance`),
    `quadtree`,
    `xDistance`,
    `yDistance`,
    `xSpeed`,
    `ySpeed`,
    it2s_db.getObjectAbsSpeed(`xSpeed`, `ySpeed`)
  );
END $$
DELIMITER ;