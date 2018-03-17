var mysql = require('mysql');

/**
 * connect to mysql connection pooling
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

const insert_user =
  'INSERT INTO ' +
  users +
  ' (name, email, password, skills, aboutMe, phone, profileImage) VALUES (?, ?, ?, ?, ?, ?, ?)';
const insert_project =
  'INSERT INTO ' +
  projects +
  ' (title, description, skillsRequired, budgetRange, employer, completeDate, bidId) VALUES (?, ?, ?, ?, ?, ?, ?)';
const insert_bid =
  'INSERT INTO ' +
  bids +
  ' (freelancer, price, created, project) VALUES (?, ?, ?, ?)';

const update_user =
  'UPDATE ' +
  users +
  ' SET name=?, password=?, skills=?, aboutMe=?, phone=?, profileImage=? WHERE email=?';
const update_project =
  'UPDATE ' +
  projects +
  ' SET title=?, description=?, skillsRequired=?, budgetRange=?, employer=?, completeDate=?, bidId=? WHERE id=?';
const update_bids =
  'UPDATE ' +
  bids +
  ' SET freelancer=?, price=?, created=?, project=? WHERE id=?';

const get_avg_bid =
  'SELECT AVG(price) AS avgbid FROM ' + bids + ' WHERE project=?';

exports.getUser = function(email, res) {
  console.log('getUser');
  sql.getConnection(function(err, connection) {
    console.log('getConnection');
    if (err) {
      console.log('db connection failed' + err);
      return;
    } else {
      console.log('db connected');
      connection.query(selectUser, [email], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.send(results[0]);
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};

exports.getProject = function(id, res) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(selectProject, [id], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.send(results[0]);
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};

exports.getBid = function(id, res) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(selectBid, [id], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.send(results[0]);
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};

exports.getAvgBid = function(email, res) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(get_avg_bid, [email], function(err, results) {
        connection.release();
        if (!err) {
          console.log(results[0]);
          res.send(results[0]);
        }
      });
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
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
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(
        insert_user,
        [name, email, password, skills, aboutMe, phone, profileImage],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('inserted');
            res.status(201);
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
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
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(
        insert_project,
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
            console.log('inserted');
            res.status(201);
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};

exports.addBid = function(freelancer, price, created, project, res) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(
        insert_bid,
        [freelancer, price, created, project],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('inserted');
            res.status(201);
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
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
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(
        update_user,
        [name, password, skills, aboutMe, phone, profileImage, email],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('inserted');
            res.status(202);
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};

exports.updateProject = function(
  Id,
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
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(
        insert_project,
        [
          title,
          description,
          skillsRequired,
          budgetRange,
          employer,
          completeDate,
          bidId,
          Id
        ],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('inserted');
            res.status(201);
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};

exports.updateBid = function(Id, freelancer, price, created, project, res) {
  sql.getConnection(function(err, connection) {
    if (err) {
      console.log('db connection failed');
      return;
    } else {
      console.log('db connected');
      connection.query(
        update_bids,
        [freelancer, price, created, project, Id],
        function(err, results) {
          connection.release();
          if (!err) {
            console.log('inserted');
            res.status(201);
          }
        }
      );
      connection.on('error', function(err) {
        res.status(400).send('Error on db operation');
        return;
      });
    }
  });
};
