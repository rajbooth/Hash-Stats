


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
This is essentially a linking table that associates multiple hashers with each run.  The *hasher_run* table uses *run_number* and *hasher_ID* as foreign keys to reference records in the *wlh_runs* and *wlh_hasher* tables respectively.

#### SQL
```SQL

```
### registrations

#### Description

#### SQL
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0ODQ0MTM0MTAsNzY5MDA2OTk1LDE4MT
k0NDYzNjVdfQ==
-->