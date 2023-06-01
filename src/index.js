"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = (0, express_1.default)();
var port = 3000;
mongoose_1.default.connect('mongodb://mongo:27017/caterin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () { return console.log('Database connected!'); })
    .catch(function (err) { return console.log(err); });
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
app.listen(port, function () {
    console.log("App is running at http://localhost:".concat(port));
});
