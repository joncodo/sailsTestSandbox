/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		dummyData: function (req, res) {
		  return res.send('dummyData');
		},

		generate: function (req, res) {
		  User.create().then(function () {


				return res.send(200);
		})
		}
};
