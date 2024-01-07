import fnCrypto from "@fn/fnCrypto";
import fnFileLoader from "@fn/fnFileLoader";
import { v4 } from "uuid";

export interface Account {
    id: string;
    username: string;
    permission: AccountPerm;
    salt: string;
    saltedPassword: string;
    createdAt: string;
}

export type AccountPerm = "admin" | "maintainer" | "subscriber" | "unknown";

interface SignUpArgs {
    username: string;
    password: string;
}


const fp = "./config/account";

const fnAccount = {
    signUp: async ({ username, password }: SignUpArgs): Promise<Account> => {
        const accountFp = `${fp}/${username}.json`;
        if (fnFileLoader.isExist(accountFp)) {
            throw new Error("duplicated username");
        }

        const account: Account = {
            id: v4(),
            username,
            permission: "subscriber",
            salt: v4(),
            saltedPassword: "",
            createdAt: new Date().toISOString(),
        };

        account.saltedPassword = fnCrypto.salting({ salt: account.salt, password });

        fnFileLoader.write({
            fp: accountFp,
            content: JSON.stringify(account),
        });

        return account;
    },

};

export default fnAccount;
