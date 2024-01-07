import crypto from "crypto";

const fnCrypto = {
    salting: ({ salt, password }: SaltArgs): string => {
        const encode = "base64";
        const bSalt = Buffer.from(salt, encode);
        const bValue = Buffer.from(password, encode);
        const res = crypto.pbkdf2Sync(bValue, bSalt, 10000, 64, "sha512");
        return res.toString(encode);
    },
};

interface SaltArgs {
    password: string;
    salt: string;
}

export default fnCrypto;
