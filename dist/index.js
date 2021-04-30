var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sql = require('mssql');
const main = () => __awaiter(this, void 0, void 0, function* () {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        yield sql.connect({
            user: "p2g1",
            password: "Tuprima1!",
            server: "mednat.ieeta.pt",
            serverName: "\\SQLSERVER",
            port: 8101,
            database: "p2g1",
            options: {
                enableArithAbort: false,
                trustedConnection: false
            }
        });
        const result = yield sql.query `SELECT * FROM SYSOBJECTS WHERE xtype = 'U';`;
        console.dir(result);
    }
    catch (err) {
        console.log(err);
        // ... error checks
    }
});
main();
//# sourceMappingURL=index.js.map