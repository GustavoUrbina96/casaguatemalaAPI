"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes"));
/**
 * Express configuration initializer
 *
 * @param app express.Application
 */
exports.default = ({ app }) => __awaiter(void 0, void 0, void 0, function* () {
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // Body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // Load API routes
    app.use('/api', routes_1.default());
    return app;
});
