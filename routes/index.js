
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

exports.login = function(req, res){
  res.render('login', { title: 'Login' });
};

exports.register = function(req, res){
  res.render('register', { title: 'Register' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' });
};

exports.success = function(req, res){
  res.render('success', { title: 'Success' });
};

exports.fail = function(req, res){
  res.render('fail', { title: 'Fail' });
};

exports.registersuccess = function(req, res){
  res.render('registersuccess', { title: 'Successful registration' });
};

exports.registeruser = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var firstName = req.body.fName;
        var lastName = req.body.lName;
        var userEmail = req.body.userEmail;
        var userPassword = req.body.userPasswordVeri;

        // Set our collection
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "firstName" : firstName,
            "lastName" : lastName,
            "userEmail" : userEmail,
            "userPassword" : userPassword
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
                res.location("fail");
                // And forward to success page
                res.redirect("failure");
            }
            else {
                // If it worked, set the header so the address bar and send user to success page
                res.location("registersuccess");
                // And forward to success page
                res.redirect("registersuccess");
            }
        });

    }
 }

 exports.loginuser = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var email = req.body.logemail;
        var password = req.body.logpass;

        // Set our collection
        //var collection = db.get('usercollection');

        // Submit to the DB
        /*collection.insert({
            "firstName" : firstName,
            "lastName" : lastName,
            "userEmail" : userEmail,
            "userPassword" : userPassword
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("success");
                // And forward to success page
                res.redirect("success");
            }
        });*/

    }
 }
