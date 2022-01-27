-- What is the capital of country X ? (Accept X from user)
 
 SET @x = 'Sweden';
 
 PREPARE capital FROM 'SELECT country.Name,city.Name FROM country INNER JOIN city ON country.Capital = city.id WHERE country.Name =?';
 EXECUTE capital USING @x;

-- List all the languages spoken in the region Y (Accept Y from user)

SET @y = 'Middle East';
PREPARE lang FROM 'SELECT country.Region,countrylanguage.Language FROM country INNER JOIN countrylanguage ON countrylanguage.countrycode = country.code WHERE country.Region = ?';
EXECUTE lang USING @y;

-- Find the number of cities in which language Z is spoken (Accept Z from user)

SET @z = 'Macedonian';
PREPARE city_num_lang_z FROM 'SELECT count(city.Name) FROM city INNER JOIN countrylanguage ON city.countrycode = countrylanguage.countrycode WHERE Language = ?';
EXECUTE city_num_lang_z USING @z;

-- List all the continents with the number of languages spoken in each continent

-- For the country given as input, is there any countries that

-- have the same official language
-- is in the same region
-- If yes, display those countries.
 -- If no, display TRUE or FALSE