CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL UNIQUE,
	`description` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
