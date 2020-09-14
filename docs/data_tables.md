


## Data tables

### wlh_hasher
#### Description
Contains data pertaining to individual hashers.
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

#### SQL
```SQL
CREATE TABLE `wlh_runs` (
  `run_number` int(5) UNSIGNED NOT NULL,
  `run_date` date NOT NULL,
  `location` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `pub` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `hare` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- Indexes for table `wlh_runs`
--
ALTER TABLE `wlh_runs`
  ADD PRIMARY KEY (`run_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wlh_runs`
--
ALTER TABLE `wlh_runs`
  MODIFY `run_number` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

```
### wlh_hasher_run
#### Description
This is essentially a linking table that associates multiple hashers with each run.  The *hasher_run* table uses *run_number* and *hasher_ID* as foreign keys to reference records in the *wlh_runs* and *wlh_hasher* tables respectively.

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

#### SQL
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY1MTk3NzE0OSw3NjkwMDY5OTUsMTgxOT
Q0NjM2NV19
-->