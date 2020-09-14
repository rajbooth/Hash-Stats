


## Data tables

### wlh_hasher
#### Description
Contains data pertaining to individual hashers.
#### SQL
```SQL
CREATE TABLE `wlh_hasher` (
  `hasher_ID` int(11) NOT NULL,
  `hash_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `alias` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `home_hash` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'West London',
  `first_name` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `mobile` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `mailing_list` tinyint(1) DEFAULT NULL,
  `membership_date` date DEFAULT NULL,
  `run_history` int(11) DEFAULT NULL,
  `resume_date` date DEFAULT NULL,
  `square_date` date DEFAULT NULL,
  `runs_recent` int(11) DEFAULT NULL,
  `award` tinyint(4) DEFAULT NULL,
  `award_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
```

### wlh_runs
#### Description
Holds details of past runs.

#### SQL
```SQL
CREATE TABLE `wlh_runs` (
  `run_number` int(5) UNSIGNED NOT NULL,
  `run_date` date NOT NULL,
  `location` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `pub` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `hare` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
```
### wlh_hasher_run
#### Description
Thi si sessentially a linking table that associates multiple hashers with each run.
#### SQL

### registrations

#### Description

#### SQL
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTYzMjQ3NzY0OSw3NjkwMDY5OTUsMTgxOT
Q0NjM2NV19
-->