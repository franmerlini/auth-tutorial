-- Create DB if not exists
SELECT 'CREATE DATABASE authtutorial'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'authtutorial')\gexec