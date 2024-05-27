<details>
<summary>1. Introduction </summary>

# Introduction

[https://sqlitebrowser.org/](https://sqlitebrowser.org/)

![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/01970cf0-08fa-4879-b5d9-fdde92f5f5e9)
![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/4e7a9d84-75e3-470d-b9d4-d0d60d004662)
![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/c63b3ca3-6ca5-4db8-847a-d6fe99e49852)
![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/732df91d-517d-4806-83ad-87f7520fae5d)
![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/f86c2aeb-e487-4a21-addc-855cdc341b6a)
![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/d1af7765-51a3-4c96-bf76-8d6731bb1d12)
![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/a2b26072-fb01-4f45-b9a1-ba88b6fd28f2)

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/41a516b7-c96b-4a36-9988-71f40af9b873">
<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/d35faea5-4387-4e1a-8d60-2148e8f43638">

# #END

</details>

<details>
<summary>2. SQL Comments </summary>

# SQL Comments

```sql
-- THIS IS A COMMENT

/*
THIS IS A COMMENT
THIS IS ANOTHER COMMENT

*/
```

```sql

/*
CREATED BY: WALTER SHIELDS
CREATE DATE: MM/DD/YYYY
DESCRIPTION: THIS IS THE STRUCTURE OF A BASIC QUERY

*/
```

# #END </details>

<details>
<summary>3. High-level questions for the composition of a Query </summary>

# High-level questions for the composition of a Query:

- What table within the database are we requesting data from?
- What fields within that table are we interested in?
- Do we want to exclude any data or filter or omit any range or time period?
- What does our query do?

# #END </details>

<details>
<summary>4. SELECT FIRSTNAME, LASTNAME AND EMAIL FROM CUSTOMER </summary>

# SELECT FIRSTNAME, LASTNAME AND EMAIL FROM CUSTOMER

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	FirstName,
	LastName,
	Email
FROM
	Customer
```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/c913434f-0eaf-4069-8f90-765880bcc718">
<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/01013a4f-539e-41ab-9508-74cb56206f99">

# #END </details>

<details>
<summary>5. SELECT FIRSTNAME, LASTNAME AND EMAIL FROM CUSTOMER with Column Aliases </summary>

# SELECT FIRSTNAME, LASTNAME AND EMAIL FROM CUSTOMER with Column Aliases

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	FirstName AS [Customer First Name],
	LastName AS "Customer Last Name",
	Email AS EMAIL
FROM
	Customer
```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/ad61bdef-7bbd-4da1-bfeb-7820f95cdca4">

# #END </details>

<details>
<summary>6. Sorting Query Results </summary>

# Sorting Query Results

## Order By Column Descending

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	FirstName AS [Customer First Name],
	LastName AS "Customer Last Name",
	Email AS EMAIL
FROM
	Customer
ORDER BY
	LastName
DESC
```

<img width="1283" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/98e468ec-d0fa-4a9b-88ea-f28b02100528">

## Order by Column Ascending

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	FirstName AS [Customer First Name],
	LastName AS "Customer Last Name",
	Email AS EMAIL
FROM
	Customer
ORDER BY
	LastName
ASC
```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/eb077893-57a4-4a2a-b52a-c87e399eb5af">

## Order by Multiple Columns

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	FirstName AS [Customer First Name],
	LastName AS "Customer Last Name",
	Email AS EMAIL
FROM
	Customer
ORDER BY
	FirstName ASC,
	LastName DESC

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/538a47f7-8d0e-4f42-8e80-605139f81f40">

# #END </details>

<details>
<summary>7. Limiting Query Results </summary>

# Limiting Query Results

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	FirstName AS [Customer First Name],
	LastName AS "Customer Last Name",
	Email AS EMAIL
FROM
	Customer
ORDER BY
	FirstName ASC,
	LastName DESC
LIMIT
	5
```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/d687979f-9bf4-4872-af98-752bb4bbb09b">

# #END </details>

<details>
<summary>8. Filter Data - How many customers purchased two songs at 99 cents each?  </summary>

# Filter Data - How many customers purchased two songs at 99 cents each?

- there are tracks at 99 cents each, which is part of our question.
- two songs purchased at 99 cents each will total to $1.98.
- So let's take a look at our invoice table and if we scroll over to the total, we do see that there are invoices totaling $1.98.

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	Total = 1.98
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/e96f63f7-6886-4057-9188-eefaab757c71">

![image](https://github.com/omeatai/AI-and-Data-Science/assets/32337103/1f168133-944b-419b-adda-d39cdbcc7689)

# #END </details>

<details>
<summary>9. Filter Data - How many invoices exist between $1.98 and $5?  </summary>

# Filter Data - How many invoices exist between $1.98 and $5?

- We would simply have to make an alteration to our WHERE clause.
- We're simply going to include the logical operator between $1.98 and $5.

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	Total BETWEEN 1.98 AND 5.00
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/913089fa-c9c0-4ccf-b6e9-ea09e766ce12">

# #END </details>

<details>
<summary>10. Filter Data - How many invoices do we have that are exactly $1.98 or $3.96?  </summary>

# Filter Data - How many invoices do we have that are exactly $1.98 or $3.96?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers first names, last names and email addresses
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	Total IN (1.98, 3.96)
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/f07b8a9c-43a4-4801-b357-7a71e66e6060">

# #END </details>

<details>
<summary>11. Filter Data - How many invoices were billed to the city of Brussels?  </summary>

# Filter Data - How many invoices were billed to the city of Brussels?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	BillingCity = 'Brussels'
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/51529ad4-5e9b-4589-988e-e7a73b4f845e">
<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/ae17089e-2192-42df-b280-1e54eeecf386">

# #END </details>

<details>
<summary>12. Filter Data - How many invoices were billed to Brussels, Orlando, or Paris?  </summary>

# Filter Data - How many invoices were billed to Brussels, Orlando, or Paris?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	BillingCity IN ('Brussels', 'Orlando', 'Paris')
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/32c6b549-c358-4a7c-b4a2-f04a41291cf5">

# #END </details>

<details>
<summary>13. Filter Data - How many invoices were billed in the cities that start with B?  </summary>

# Filter Data - How many invoices were billed in the cities that start with B?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	BillingCity LIKE 'B%'
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/92a3eaee-9a17-44a9-a2a9-9bd111216dea">

# #END </details>

<details>
<summary>14. Filter Data - How many invoices were billed in cities that have a B anywhere in its name?  </summary>

# Filter Data - How many invoices were billed in cities that have a B anywhere in its name?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	BillingCity LIKE '%B%'
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/3137beb5-1d6f-4797-b126-1bd0c6b2fdef">

# #END </details>

<details>
<summary>15. Filter Data - How many invoices were billed on May 22, 2010 (2010-05-22 00:00:00)?  </summary>

# Filter Data - How many invoices were billed on May 22, 2010 (2010-05-22 00:00:00)?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	Date(InvoiceDate) =  '2010-05-22'
	-- DateTime(InvoiceDate) =  '2010-05-22 00:00:00'
	-- InvoiceDate = '2010-05-22 00:00:00'
ORDER BY
	CustomerId ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/2ded905e-dea9-43e3-aaeb-b48590fe4b21">
<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/fcd07f2a-1179-4c00-b470-ebd0b846cc37">

# #END </details>

<details>
<summary>16. Filter Data - How many invoices were billed after 2010-05-22 and have a total of less than $3?  </summary>

# Filter Data - How many invoices were billed after 2010-05-22 and have a total of less than $3?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	Date(InvoiceDate) >  '2010-05-22' AND Total < 3.00
ORDER BY
	InvoiceDate ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/a1089361-3f6b-49c5-a460-b963f8e5cb74">

# #END </details>

<details>
<summary>17. Filter Data - How many invoices whose billing city starts with P or the billing city starts with D?  </summary>

# Filter Data - How many invoices whose billing city starts with P or the billing city starts with D?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	BillingCity LIKE  'P%'  OR BillingCity LIKE 'D%'
ORDER BY
	InvoiceDate ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/851eb6a4-1661-4981-9628-305c9ba4bb5d">

# #END </details>

<details>
<summary>18. Filter Data - How many invoices are greater than $1.98 from any cities whose names start with P or D?  </summary>

# Filter Data - How many invoices are greater than $1.98 from any cities whose names start with P or D?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total
FROM
	Invoice
WHERE
	Total > 1.98 AND (BillingCity LIKE 'P%' OR BillingCity LIKE 'D%')
ORDER BY
	InvoiceDate ASC
LIMIT
	500

```

<img width="1327" alt="image" src="https://github.com/omeatai/AI-and-Data-Science/assets/32337103/37b8079d-1224-4147-b7cb-a8d8d5343a76">

# #END </details>

<details>
<summary>19. Filter Data - Adding Customised Columns using IF THEN Logic with CASE  </summary>

# Filter Data - Adding Customised Columns using IF THEN Logic with CASE

## 1. WSDA Music Sales Goal:

- They want as many customers as possible to spend between $7.00 and $15.00.

## Sales Categories:

- Baseline Purchase - Between $0.99 and $1.99
- Low Purchase- Between $2.00 and $6.99
- Target Purchase Between $7.00 and $15.00
- Top Performer- Above $15.00

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/21/2024
DESCRIPTION: This query displays all customers info per query instance
*/

SELECT
	CustomerId,
	InvoiceDate,
	BillingAddress,
	BillingCity,
	Total,
	CASE
		WHEN Total < 2.00 THEN 'Baseline Purchase'
		WHEN Total BETWEEN 2.00 AND 6.99 THEN 'Low Purchase'
		WHEN Total BETWEEN 7.00 AND 15.00 THEN 'Target Purchase'
		ELSE 'Top Performance'
		END AS PurchaseType,
	CASE
		WHEN Total < 7.00 THEN 'Low'
		WHEN Total > 6.99 THEN 'High'
		END AS Potential
FROM
	Invoice
WHERE
	Total > 1.98 AND (BillingCity LIKE 'P%' OR BillingCity LIKE 'D%')
ORDER BY
	InvoiceDate ASC
LIMIT
	500
	
```

<img width="1414" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/0fe3fe64-1e0d-42b0-9b0f-0d38063f99f9">


## 2. Code Challenge: Categorize tracks by price

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/b266d087-55c3-41d4-b500-314e7a7ed68c)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/4c5bbb82-ad47-4875-ab42-24422c288e46)

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/25/2024
Description: This query selects track names, composers,
unit prices, and categorizes each track based on its price.
*/

SELECT 
    Name AS "Track Name",
    Composer,
    UnitPrice AS Price,
    CASE
        WHEN UnitPrice < 1.00 THEN 'Budget' 
        WHEN UnitPrice BETWEEN 1.00 AND 1.49 THEN 'Regular'
        WHEN UnitPrice BETWEEN 1.50 AND 1.99 THEN 'Premium'
        ELSE 'Exclusive'
		/*
		WHEN UnitPrice < 0.99 THEN "Budget'
		WHEN UnitPrice > 0.99 AND UnitPrice < 1.49 THEN 'Regular'
		WHEN UnitPrice > 1.49 AND UnitPrice < 1.99 THEN "Premium"
		ELSE 'Exclusive'
		*/
    END AS PriceCategory
FROM 
    Track
ORDER BY
    UnitPrice ASC;

```

<img width="1414" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/78921320-c04d-441f-a390-1838ef7c9c59">

# #END </details>

<details>
<summary>20. Accessing Data from multiple Tables - BASIC JOINS </summary>

# Accessing Data from multiple Tables - BASIC JOINS

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/25/2024
Description: JOINS
*/

SELECT 
    *
FROM 
    Invoice
INNER JOIN
	Customer
ON
	Invoice.CustomerId = Customer.CustomerId
ORDER BY
	Customer.CustomerId
	
```

<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/8ace37e0-f4ac-49ba-b90a-d4c889be1ce8">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/dfb1d7ea-6b63-4749-a301-978feccb33a9)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/e38dd40a-9a39-4aa6-a7ef-a25dc77eba03)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f1c33eeb-b386-455b-b87c-38c43469519f)

<img width="1456" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/0cb7036c-92fa-40fb-990e-f2f07acf8cb2">
<img width="1500" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/439e855f-d094-4e2a-8004-a07e527e822f">
<img width="1500" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/4e3b795c-43eb-4a7c-8302-40cc445c1697">

# #END </details>

<details>
<summary>21. Accessing Data from multiple Tables - SIMPLIFYING JOINS WITH ALIAS </summary>

# Accessing Data from multiple Tables - SIMPLIFYING JOINS WITH ALIAS

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/25/2024
Description: JOINS
*/

SELECT 
    c.LastName,
	c.FirstName,
	i.InvoiceId,
	i.CustomerId,
	i.InvoiceDate,
	i.Total
FROM 
    Invoice AS i
INNER JOIN
	Customer AS c
ON
	i.CustomerId = c.CustomerId
ORDER BY
	c.CustomerId
	
```

<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/7f6aee53-4a1a-4bae-be0e-797234c87a3c">

# #END </details>

<details>
<summary>22. Accessing Data from multiple Tables - USING INNER JOINS </summary>

# Accessing Data from multiple Tables - USING INNER JOINS

- An inner join only returns matching records.
- Any unmatched data from either table is ignored.
- Joins are often described with the use of Venn diagrams.
- As our Venn diagram shows, an inner join represents only the overlapping section of the Venn diagram.
-  The inner join is the most common type of join that's used.
-  The main use of the inner join is to bring corresponding data together from different tables in a relational database.

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/15fa681e-ed29-405c-b535-926235c0cddc)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/300fb60b-9f89-4abb-a626-6843536cb273)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/2f9c8ab3-7d1c-4877-8204-8abb96b51a24)

# #END </details>

<details>
<summary>23. Accessing Data from multiple Tables - USING LEFT OUTER JOINS </summary>

# Accessing Data from multiple Tables - USING LEFT OUTER JOINS

- A left outer join combines all the records from the left table with any matching records from the right table.
- As shown in our Venn diagram, the concept of left table and right table depends entirely on the order these tables are listed in the join statement.
- So for example, our SQL statement here has listed invoices first. Then after the left outer join, it lists the customer table.
- Our invoice table is the left table and our customer table is the right table.
- With this type of join, everything in our invoice table will be displayed.
- Since customer 1 did not order any songs, that particular record is omitted.
- We are combining all 5 records from the invoice table with only 3 records from the customer table.
- Left joins are useful because they allow us to see discrepancies in our data.
- We can produce lists of customers that have not generated invoices or search for data that has been removed in the right table but still exist in the left.

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/b07245c9-8aa0-42b7-9d4c-8c1b6c4d4bde)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d264d103-e099-48ad-9fc8-26d34e619a4b)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/133ba54d-1dba-4cbe-a013-68da4dd401cb)

# #END </details>

<details>
<summary>24. Accessing Data from multiple Tables - USING RIGHT OUTER JOINS </summary>

# Accessing Data from multiple Tables - USING RIGHT OUTER JOINS

- The right outer joins are not supported in SQLITE.
- However, right joins are still very popular in other relational database management systems.
- The right outer join returns the entire right table as well as matching information from the left table.
- The right join is a mirror image of the left join, and functions in a very similar way.
- The right join takes all fields from the right table, in this case the customer's table, and matches that data with any corresponding data from the invoice table or the left table. 

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/dc5f4981-82f8-4a4d-9073-813f06fb919c)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/803ec5c9-1305-48cd-ac89-191485958490)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/6c037f79-4d4e-474a-8a7e-1bb8190044b1)

 # #END </details>

<details>
<summary>25. Accessing Data from multiple Tables - Entity Relationship Diagrams </summary>

# Accessing Data from multiple Tables - Entity Relationship Diagrams

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/33f30a8d-0f36-4805-8ab0-ce603d313787)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/845d3b76-8ded-4391-a7cc-4a7c0e8351ff)

 # #END </details>

<details>
<summary>26. Accessing Data from multiple Tables - JOINING MULTIPLE TABLES - What employees are responsible for the 10 highest individual sales? </summary>

# Accessing Data from multiple Tables - JOINING MULTIPLE TABLES - What employees are responsible for the 10 highest individual sales?

```sql
/*
CREATED BY: IFEANYI OMEATA
CREATE DATE: 05/25/2024
Description: JOINS
*/

SELECT 
    e.FirstName, 
	e.LastName, 
	e.EmployeeId, 
	c.FirstName, 
	c.LastName, 
	c.SupportRepId, 
	i.CustomerId, 
	i.Total
FROM 
    Invoice AS i
INNER JOIN
	Customer AS c
ON
	i.CustomerId = c.CustomerId
INNER JOIN
	Employee AS e	
ON
	c.SupportRepId = e.EmployeeId
ORDER BY
	i.Total DESC
LIMIT
	10	
	
```

<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d28dd8b3-097e-4487-a41f-66f4b8d839e0">

 # #END </details>

<details>
<summary>27. Accessing Data from multiple Tables - W </summary>

# Accessing Data from multiple Tables - W



# #END </details>

<details>
<summary>+LinkedIn - SQL Essential Training </summary>

## Install venv

```sql

```

```sql

```

```sql

```

```sql

```

# #END

</details>
