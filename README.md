# Good Clean Laundromat

A website created for CSC 473 (Web Design)

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