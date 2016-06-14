var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/*  User details
the date follows MM/DD/YYYY
password needs to be encrypted string
*/
var user ={
    "_id": "id",
    "username"    : "TonyP",
    "name": "Tony Parker",
    "reg": "13BIT0223",
    "email": "tony.parker2013@vit.ac.in",
    "threadsActive": ["Reform in education system!", "Best faculty for CSE999"],
    "lastActive": "6/14/2016, 5:36:50 PM",
    "dOB": "12/09/1995",
    "dOJ": "05/12/2016",
    "pwd": "password",
    "isModerator" : true,
    "moderating": ["Best Fac"]
}
/*  Tag details
list of threads & their details
this can be review tag.
*/

var tag =   {
    "tagName"   :   "reviews",
    "threads":[
        {
            "name"  :   "Faculty review for CSE999",
            "creator"   :   "TonyP",
            "replies"  :   23,
            "isActive"  :   false
        },
        {
            "name"  :   "Course review for CSE999",
            "creator"   :   "PeterS",
            "replies"  :   10,
            "isActive"  :   true
        }
    ]
}

/*  Thread Details

*/
var thread =    {
    "name": "Options for extra Co-curricular",
    "startDate": "6/14/2016, 7:05:29 PM",
    "startedBy": "TonyP",
    "comments": [
        {
            "user": "TonyP",
            "text": "I'm looking for the best options for extra Co-curricular. Can someone help me with this?",
            "time": "6/14/2016, 7:05:29 PM",
            "thread": "Options for extra Co-curricular"
        }
    ],
    "lastActivity": "TonyP",
    "users": ["TonyP"],
    "isTrending": false
};


router.get('/profile', function(req, res){
    res.render('profile', user);
});

router.get('/tag', function(req, res){
    res.render('tag', tag);
})

router.get('/new', function(req, res){
    res.render('new');
})

router.post('/new', function(req, res){
    //  process the request.
    res.json(req.body);
})

router.get('/tag/thread', function(req, res){
    res.render("thread", thread);
})
module.exports = router;
