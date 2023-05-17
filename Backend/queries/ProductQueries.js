exports.getAllProducts = `SELECT p.id,p.name,p.price,p.description,p.stockinusa,p.unit,p.moq
,s.name as catgeory,c.name as maincategory,p.images,p.certificates,
p.country,p.rating,p.incoterms,x.name as supplier,x.standards
FROM products p 
INNER JOIN subcategory s 
ON p.categoryid = s.id
INNER JOIN category c
ON s.categoryid = c.id
INNER JOIN supplier x 
ON p.supplierid = x.id
WHERE (p.name ILIKE $1::text OR $1::text IS NULL)
AND ($2::int IS NULL OR moq <= $2)
AND ($3::integer IS NULL OR price >= $3::integer)
AND ($4::integer IS NULL OR price <= $4::integer)
AND (s.name ILIKE $5::text OR $5::text IS NULL)
AND (country ILIKE ANY($6) OR $6 IS NULL)
AND (p.certificates && $7 OR $7 IS NULL)
AND (stockinusa=$8 OR $8 IS NULL)
AND (c.name ILIKE $9 OR $9 IS NULL)
AND (x.standards && $10 OR $10 IS NULL)`;
