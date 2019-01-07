CREATE database restaurantsDB;

USE restaurantsDB;

CREATE TABLE restaurants (
  restaurant_id INT(11) AUTO_INCREMENT NOT NULL,
  restaurant_name VARCHAR (100),
  restaurant_link VARCHAR (200),
  restaurant_img VARCHAR (200),
  rating INT (100),
  PRIMARY KEY (restaurant_id)
);

INSERT INTO restaurants (restaurant_name, restaurant_link, restaurant_img, restaurant_genre, rating) VALUES ("Woodhouse Fish Co.", "http://woodhousefish.com/", "http://woodhousefish.com/neon.jpg", "Seafood", 6), ("Sanraku", "http://www.sanraku.com/", "http://www.sanraku.com/image/snrkulogooo.jpg", "Sushi", 9), ("Alexander's Steakhouse", "https://alexanderssteakhouse.com/sanfrancisco/menu/", "https://alexanderssteakhouse.com/sanfrancisco/wp-content/uploads/sites/4/2018/08/ashlogo2white78.png", "Steak House", 10)

