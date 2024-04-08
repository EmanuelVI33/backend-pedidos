-- Create Database IF NOT EXISTS maindb1
SELECT 'CREATE DATABASE maindb1'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'maindb1')\gexec