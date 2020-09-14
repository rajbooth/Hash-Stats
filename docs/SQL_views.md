


## SQL Views

### registration_info
#### Description
Lists details of all hashers who have registered for the next run.

#### Used in
Registrations report at:
https://westlondonhash.com/registrations/

#### SQL
```SQL
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER 
VIEW `registration_info`  AS  
SELECT
    row_number() over(
    ORDER BY
        `westlon2_stats`.`registrations`.`timestamp`
) AS `row_number`,
`westlon2_stats`.`registrations`.`reg_id` AS `reg_id`,
`westlon2_stats`.`registrations`.`timestamp` AS `timestamp`,
`westlon2_stats`.`registrations`.`email` AS `email`,
`westlon2_stats`.`registrations`.`hasher_ID` AS `hasher_ID`,
`westlon2_stats`.`registrations`.`hash_name` AS `hash_name`,
`westlon2_stats`.`registrations`.`real_name` AS `real_name`,
`westlon2_stats`.`registrations`.`mobile` AS `mobile`,
`westlon2_stats`.`registrations`.`prev_reg` AS `prev_reg`,
`westlon2_stats`.`registrations`.`hashing` AS `hashing`,
`westlon2_stats`.`registrations`.`pubbing` AS `pubbing`,
`westlon2_stats`.`registrations`.`comments` AS `comments`,
`westlon2_stats`.`registrations`.`dietary` AS `dietary`,
`westlon2_stats`.`registrations`.`run_number` AS `run_number`,
`westlon2_stats`.`registrations`.`run_date` AS `run_date`
FROM
    `westlon2_stats`.`registrations`
WHERE
    `westlon2_stats`.`registrations`.`run_number` IN(
    SELECT
        MAX(
            `westlon2_stats`.`wlh_runs`.`run_number`
        ) AS `max_run`
    FROM
        `westlon2_stats`.`wlh_runs`
)
```

### hasher_stats
#### Description
Generates a dataset containing details of all runs attended for each hasher, by joining the *wlh_hasher_run* table to the *wlh_hasher* table.

#### Used in

 - Hasher-stats report:  https://westlondonhash.com/hash-stats/hasher-stats/
 - Hasher-details form: https://westlondonhash.com/hashers/
 - Top 20 hashers report: https://westlondonhash.com/hash-stats/top-20-hashers/

#### SQL
```SQL
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER 
VIEW `hasher_stats`  AS 
SELECT
    LPAD(`h`.`hasher_ID`, 3, 0) AS `hasher_ID`,
    `h`.`hash_name` AS `hash_name`,
    `h`.`run_history` AS `Runs before 30 June 2018`,
    `hr`.`recent` AS `Runs since 30 June 2018`,
    CONCAT(
        'https://westlondonhash.com/hash-stats/hasher-runs/?wdt_column_filter[hasher_ID]=',
        LPAD(`h`.`hasher_ID`, 3, 0),
        '||',
        `hr`.`recent`
    ) AS `recent`,
    `h`.`run_history` + `hr`.`recent` AS `Total Runs`,
    IFNULL(`hh`.`hared`, 0) AS `Hared since 30 June 2018`
FROM
    (
        (
            `westlon2_stats`.`wlh_hasher` `h`
        LEFT JOIN(
            SELECT
                `westlon2_stats`.`wlh_hasher_run`.`hasher_ID` AS `hasher_ID`,
                COUNT(0) AS `recent`
            FROM
                `westlon2_stats`.`wlh_hasher_run`
            GROUP BY
                `westlon2_stats`.`wlh_hasher_run`.`hasher_ID`
        ) `hr`
    ON
        (`h`.`hasher_ID` = `hr`.`hasher_ID`)
        )
    LEFT JOIN(
        SELECT
            `westlon2_stats`.`wlh_hasher_run`.`hasher_ID` AS `hasher_ID`,
            COUNT(0) AS `hared`
        FROM
            `westlon2_stats`.`wlh_hasher_run`
        WHERE
            `westlon2_stats`.`wlh_hasher_run`.`hasher_value` = 'H'
        GROUP BY
            `westlon2_stats`.`wlh_hasher_run`.`hasher_ID`
    ) `hh`
ON
    (`h`.`hasher_ID` = `hh`.`hasher_ID`)
    )
WHERE
    `hr`.`recent` > 1
ORDER BY
    `h`.`hash_name`
```
### hasher_run_list
#### Description
Lists all the runs that have been attended by each hasher.

#### Used in
Hyperlinked drill-down form hasher-stats form:
https://westlondonhash.com/hash-stats/hasher-runs/?wdt_column_filter[hasher_ID]=056

#### SQL
```SQL
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER 
VIEW `hasher_run_list`  AS
SELECT
    LPAD(`hr`.`hasher_ID`, 3, 0) AS `hasher_ID`,
    `hr`.`run_number` AS `run_number`,
    `r`.`run_date` AS `run_date`,
    `r`.`location` AS `location`
FROM
    (
        `westlon2_stats`.`wlh_hasher_run` `hr`
    JOIN `westlon2_stats`.`wlh_runs` `r`
    ON
        (`hr`.`run_number` = `r`.`run_number`)
    )
ORDER BY
    `r`.`run_number`
```
### run_hasher_list
#### Description
Lists all the hashers that have attended a given run.

#### Used in
Hyperlinked drill-down from run-stats form:
https://westlondonhash.com/hash-stats/run-attendance/?wdt_column_filter[run_number]=1811

#### SQL
```SQL
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER 
VIEW `run_hasher_list`  AS
SELECT
    `hr`.`run_number` AS `run_number`,
    `h`.`hash_name` AS `hash_name`
FROM
    (
        `westlon2_stats`.`wlh_hasher` `h`
    JOIN `westlon2_stats`.`wlh_hasher_run` `hr`
    ON
        (`h`.`hasher_ID` = `hr`.`hasher_ID`)
    )
ORDER BY
    `h`.`hash_name`
```
### next_run
#### Description
Used to return details of the most recently added run in the **runs** table.

#### Used in
Populates the header in the Google Sheets run form application.
https://tinyurl.com/y48jnbv8

#### SQL
```SQL
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER 
VIEW `next_run`  AS 
SELECT
    `westlon2_stats`.`wlh_runs`.`run_number` AS `run_number`,
    `westlon2_stats`.`wlh_runs`.`run_date` AS `run_date`,
    `westlon2_stats`.`wlh_runs`.`location` AS `location`,
    `westlon2_stats`.`wlh_runs`.`pub` AS `pub`,
    `westlon2_stats`.`wlh_runs`.`hare` AS `hare`
FROM
    `westlon2_stats`.`wlh_runs`
ORDER BY
    `westlon2_stats`.`wlh_runs`.`run_number`
DESC
LIMIT 1
```
### run_form
#### Description
Called by **run_form** REST API endpoint, and used to populate the lis tof registered hashers on the Run Attendance app.

#### Used in

#### SQL
```SQL
SELECT
    `h`.`hasher_ID` AS `ID`,
    `h`.`hash_name` AS `hasher`,
    IFNULL(
        DATE_FORMAT(`h`.`membership_date`, '%d/%m/%Y'),
        ' '
    ) AS `memb exp`
FROM
    (
        `westlon2_stats`.`registrations` `r`
    JOIN `westlon2_stats`.`wlh_hasher` `h`
    ON
        (`r`.`hasher_ID` = `h`.`hasher_ID`)
    )
WHERE
    `r`.`run_number` IN(
    SELECT
        MAX(
            `westlon2_stats`.`wlh_runs`.`run_number`
        ) AS `max_run`
    FROM
        `westlon2_stats`.`wlh_runs`
)
ORDER BY
    `h`.`hash_name`
```
### run_stats
#### Description

#### Used in

#### SQL

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA4MDIxOTY2MCw2ODE4Mzk2NzEsLTIzNj
Y1OTYxLDEyNzA0OTQxNTFdfQ==
-->