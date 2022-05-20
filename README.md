# Good Clean Laundromat (backend)

A website created for CSC 473 (Web Design)

[Frontend repository](https://github.com/abdulimtiaz/good-clean-laundromat-frontend)

Note: The access code for the hosted version is currently `apple`.

## Quick Setup

1. Install the the following technologies: 

- [Postgres](https://www.postgresql.org/download/)
- [Node.js](https://nodejs.org/en/download/)

2. Clone the repository to a directory of your choice: 

```
git clone https://github.com/abdulimtiaz/Good-Clean-Laundromat.git
```

3. Run `npm i` in the directory

4. Create an `.env` file in the directory as follows:

```
PORT=5000

PGHOST=localhost
PGUSER=postgres

# password you specified during postgres setup
PGPASS=password

# default database that exists in postgres
PGDATABASE=postgres

JWT_SECRET=anything

```

5. Run the server
```
npm run start
```

During development, nodemon can be used to restart the server upon any modifications to files:

``` 
npm run dev
```

## Viewing contents of database

1. Run `psql -U postgres` in a terminal/cmd window 

    If this does not work properly, add the Postgres binaries to your PATH. Otherwise, skip to step 2.

    In Windows:

    1. Search `environment variables` and click `Edit the system environment variables`

    2. Click `Environment Variables` at the bottom of the window

    3. Under the `System Variables` section, find the `Path` variable and click Edit

    4. Click New and add the following directories separately: 

    ```
    C:\Program Files\PostgreSQL\14\bin
    C:\Program Files\PostgreSQL\14\lib
    ```

    5. Click OK three times to save the new settings


2. Enter the password you created during Postgres setup

3. Enter SQL queries as desired. For example:

```postgres
SELECT * FROM User_;
```

