/**
 * Created by feilin on 2017/8/8.
 */

module.exports = function (req, res) {
    console.log(JSON.stringify(req.body));
    res.render('home');
};