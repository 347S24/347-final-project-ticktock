ALTER ROLE pegramay SET client_encoding TO 'utf8';
ALTER ROLE pegramay SET default_transaction_isolation TO 'read committed';
ALTER ROLE pegramay SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE ticktock TO pegramay;
\c ticktock postgres
GRANT ALL ON SCHEMA public TO pegramay;