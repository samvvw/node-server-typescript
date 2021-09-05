"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.status(200).send('It is working');
});
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map