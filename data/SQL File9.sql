-- The following is an demonstration about SET

-- the snippet below is a standard way to do code
SELECT * FROM ice_creamdb.products;
INSERT INTO products (flavor, rice quantity) VALUES ('salted caramel', 7.50, 39)
UPDATE products
SET quantity = 222
WHERE id = 4


-- Or.....

-- SELECT * FROM ice_creamdb.products;
-- INSERT INTO products (flavor, rice quantity) VALUES ('salted caramel', 7.50, 39)
UPDATE products
SET flavor = 'twinkie', price= 4.13, quantity = 50
]