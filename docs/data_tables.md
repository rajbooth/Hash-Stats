


## Data tables

### wlh_hasher
#### Description
Contains data pertaining to individual hashers.

#### WP Front-end Form
This table can be edited using the private [**hashers** ](https://westlondonhash.com/hashers/) form in the WP front-end.

#### SQL
```SQL
-- Table structure for table `wlh_hasher`
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

-- Indexes for table `wlh_hasher`
ALTER TABLE `wlh_hasher`
  ADD PRIMARY KEY (`hasher_ID`),
  ADD UNIQUE KEY `hasher` (`hash_name`);

-- AUTO_INCREMENT for table `wlh_hasher`
ALTER TABLE `wlh_hasher`
  MODIFY `hasher_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
```

### wlh_runs
#### Description
Holds details of past runs.

#### WP Front-end Form
This form can be edited using the **runs** form in the WP front-end.

#### SQL
```SQL
-- Table structure for table `wlh_runs`
CREATE TABLE `wlh_runs` (
  `run_number` int(5) UNSIGNED NOT NULL,
  `run_date` date NOT NULL,
  `location` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `pub` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `hare` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Indexes for table `wlh_runs`
ALTER TABLE `wlh_runs`
  ADD PRIMARY KEY (`run_number`);

-- AUTO_INCREMENT for table `wlh_runs`
ALTER TABLE `wlh_runs`
  MODIFY `run_number` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;
```
### wlh_hasher_run
#### Description
This is essentially a linking table that associates multiple hashers with each run.  The *hasher_run* table uses *run_number* and *hasher_ID* as foreign keys to reference records in the *wlh_runs* and *wlh_hasher* tables respectively.

#### WP Front-end Form
This table can be edited using the **hasher-run** form.

#### SQL
```SQL
-- Table structure for table `wlh_hasher_run`
CREATE TABLE `wlh_hasher_run` (
  `import_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hasher_ID` smallint(6) NOT NULL,
  `run_number` smallint(6) NOT NULL,
  `hasher_name` varchar(50) DEFAULT NULL,
  `run_date` date DEFAULT NULL,
  `hasher_value` char(1) NOT NULL DEFAULT 'M'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Indexes for table `wlh_hasher_run`
ALTER TABLE `wlh_hasher_run`
  ADD PRIMARY KEY (`import_id`),
  ADD UNIQUE KEY `idx_hasher_run` (`hasher_ID`,`run_number`),
  ADD KEY `hasher_ID` (`hasher_ID`),
  ADD KEY `run_number` (`run_number`);

-- AUTO_INCREMENT for table `wlh_hasher_run`
ALTER TABLE `wlh_hasher_run`
  MODIFY `import_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
```
### registrations
#### Description
This table stores details of pre-run registration information captured from the Google Forms run registration 'app'.

#### WP Front-end Form
This table cannot be maintained via a dedicated form in the WP front-end.

#### SQL
```SQL
-- Table structure for table `registrations`
CREATE TABLE `registrations` (
  `reg_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `email` varchar(50) NOT NULL,
  `hasher_ID` smallint(6) DEFAULT NULL,
  `hash_name` varchar(50) DEFAULT NULL,
  `real_name` varchar(50) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `prev_reg` text NOT NULL,
  `hashing` text NOT NULL,
  `pubbing` text NOT NULL,
  `comments` varchar(250) DEFAULT NULL,
  `dietary` varchar(50) DEFAULT NULL,
  `run_number` smallint(6) NOT NULL,
  `run_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Indexes for table `registrations`
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`reg_id`),
  ADD UNIQUE KEY `idx_run_email` (`email`,`run_number`);

-- AUTO_INCREMENT for table `registrations`
ALTER TABLE `registrations`
  MODIFY `reg_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcyODU0MzgxMCw3NjkwMDY5OTUsMTgxOT
Q0NjM2NV19
-->