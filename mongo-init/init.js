
db = db.getSiblingDB('branche');
db.createCollection('branches');

var brancheColl = db.getCollection('branches');

brancheColl.insertMany([
    {"code": "1", "name": "Agencia Norte"},
	{"code": "2", "name": "Agencia Sur"},
	{"code": "3", "name": "Agencia Centro"}
	
]);

