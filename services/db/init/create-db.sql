drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists jarcade;
drop database if exists jarcade_integration;
drop role if exists jarcade_app;
drop role if exists jarcade_read;

create role jarcade_app login password 'jarcadedev' valid until 'infinity';
create role jarcade_read login password 'jarcadedev' valid until 'infinity';
create database jarcade;
create database jarcade_integration;
