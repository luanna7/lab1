var mysql = require('mysql');

/**
 * Create mysql connection pooling
 */
var sql = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 8889,
  database: 'mydb'
});

const users = 'USERS';
const projects = 'PROJECTS';
const bids = 'bids';

const selectUser = 'select * from ' + users + ' where email = ?';
const selectProject = 'select * from ' + projects + ' where employer = ?';
const selectBid = 'select * from ' + bids + ' where Id = ?';

const insertUser =
  'INSERT INTO ' +
  users +
  ' (name, email, password, skills, aboutMe, phone, profileImage) VALUES (?, ?, ?, ?, ?, ?, ?)';
const insertProject =
  'INSERT INTO ' +
  projects +
  ' (title, description, skillsRequired, budgetRange, employer, completeDate, bidId) VALUES (?, ?, ?, ?, ?, ?, ?)';
const insertBid =
  'INSERT INTO ' +
  bids +
  ' (freelancer, price, created, project) VALUES (?, ?, ?, ?)';

const updateUser =
  'UPDATE ' +
  users +
  ' SET name=?, password=?, skills=?, aboutMe=?, phone=?, profileImage=? WHERE email=?';

const calculateAvgBid =
  'SELECT AVG(price) AS avgbid FROM ' + bids + ' WHERE project=?';

exports.getUser = function(email, res) {
  console.log('Get User');
  sql.getConnection(function(err, connection) {
    console.log('Get Connection');
    if (err) {
      console.log('Database connection failed' + err);
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(selectUser, [email], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.status(200).send(results[0]);
        } else {
          res.status(500).send('Get user failed');
          return;
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.signIn = function(email, password, res) {
  console.log('signIn User');
  sql.getConnection(function(err, connection) {
    console.log('Get Connection');
    if (err) {
      console.log('Database connection failed' + err);
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(selectUser, [email], function(err, results) {
        connection.release();
        if (!err && results[0].password == password) {
          console.log(results[0]);
          res.status(200).send(results[0]);
        } else {
          res.status(500).send('Sign in failed');
          return;
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.getProject = function(id, res) {
  console.log('Get Project');
  sql.getConnection(function(err, connection) {
    console.log('Get Connection');
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(selectProject, [id], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.status(200).send(results[0]);
        } else {
          res.status(500).send('Get user failed');
          return;
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.getBid = function(id, res) {
  console.log('Get Bid');
  sql.getConnection(function(err, connection) {
    console.log('Get Connection');
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(selectBid, [id], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.status(200).send(results[0]);
        } else {
          res.status(500).send('Get bid failed');
          return;
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.calculateAvgBid = function(email, res) {
  console.log('Get Average Bid');
  sql.getConnection(function(err, connection) {
    console.log('Get Connection');
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(calculateAvgBid, [email], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.status(200).send(results[0]);
        } else {
          res.status(500).send('Get average bid failed');
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.addUser = function(
  name,
  email,
  password,
  skills,
  aboutMe,
  phone,
  profileImage,
  res
) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(
        insertUser,
        [name, email, password, skills, aboutMe, phone, profileImage],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('User inserted');
            res.status(201).send('User inserted');
          } else {
            res.status(500).send('User insertion failed');
            return;
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.addProject = function(
  title,
  description,
  skillsRequired,
  budgetRange,
  employer,
  completeDate,
  bidId,
  res
) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(
        insertProject,
        [
          title,
          description,
          skillsRequired,
          budgetRange,
          employer,
          completeDate,
          bidId
        ],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('Project inserted');
            res.status(201).send('Project inserted');
          } else {
            res.status(500).send('Project insertion failed');
            return;
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.addBid = function(freelancer, price, created, project, res) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(
        insertBid,
        [freelancer, price, created, project],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('inserted');
            res.status(201).send('Bid inserted');
          } else {
            res.status(500).send('Bid insertion failed');
            return;
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};

exports.updateUser = function(
  name,
  email,
  password,
  skills,
  aboutMe,
  phone,
  profileImage,
  res
) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('Database connection failed');
      res.status(500).send('Database connection failed');
      return;
    } else {
      console.log('Database connected');
      connection.query(
        updateUser,
        [name, password, skills, aboutMe, phone, profileImage, email],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('User updated');
            res.status(202).send('User updated');
          } else {
            res.status(500).send('User update failed');
            return;
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on database operation');
        return;
      });
    }
  });
};
