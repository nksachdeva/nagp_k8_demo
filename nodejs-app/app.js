const expresss = require('express');
const { Pool } = require('pg');

const app = expresss();
app.use(expresss.json());

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT || 5432
});


// GET ALL ITEMS
app.get('/items', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM inventory_table');
    res.json(rows);
});

// GET ONE ITEM
app.get('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query(`SELECT * FROM inventory_table WHERE id = ${id}`);
    res.json(rows[0] || {});
});

// ADD ITEM
app.post('/items/', async (req, res) => {
    const { name, count } = req.body;
    const { rows } = await pool.query(
        'INSERT INTO inventory_table (name, count) VALUES ($1, $2) RETURNING *',
        [name, count]
    );
    res.status(201).json(rows[0]);
});


app.listen(3000, () => console.log('App listening on port 3000'));