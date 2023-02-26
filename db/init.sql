-- Create DB if not exists
SELECT 'CREATE DATABASE auth-tutorial'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'auth-tutorial')