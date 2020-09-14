


## SQL Views

### registration_info
#### Description
Lists details of all hashers who have registered for the next run.
#### Used in
Registrations report at:
https://westlondonhash.com/registrations/
#### SQL
```SQL
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

#### Used in

#### SQL
### hasher_run_list
#### Description

#### Used in

#### SQL

### run_hasher_list
#### Description

#### Used in

#### SQL
### next_run
#### Description

#### Used in

#### SQL
### run_form
#### Description

#### Used in

#### SQL
### run_stats
#### Description

#### Used in

#### SQL

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM2NzE2Nzk1NiwtMjM2NjU5NjEsMTI3MD
Q5NDE1MV19
-->