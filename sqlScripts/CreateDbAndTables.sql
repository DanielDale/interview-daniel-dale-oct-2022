CREATE TABLE links(
  id INTEGER PRIMARY KEY ASC,
  url TEXT,
  shortened TEXT
);

INSERT INTO links (url, shortened) VALUES('www.google.com', 'test');

