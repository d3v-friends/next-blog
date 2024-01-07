import { fnEnv } from "@fn-nextjs";
import { resolve, dirname } from "path";
import { existsSync, rmSync, mkdirSync, writeFileSync } from "fs";

const fnFileLoader = {
    isExist: (fp: string): boolean => {
        return existsSync(fnFileLoader.fitOsPath(fnEnv.string("ROOT_PATH", __dirname), fp));
    },
    write: ({ fp, content }: WriteArgs) => {
        fp = fnFileLoader.fitOsPath(fnEnv.string("ROOT_PATH", __dirname), fp);
        if (fnFileLoader.isExist(fp)) {
            rmSync(fp);
        } else {
            mkdirSync(dirname(fp), {
                recursive: true,
            });
        }
        writeFileSync(fp, content);
    },
    fitOsPath: (...fps: string[]): string => {
        const os = fnEnv.string("OS", "Linux");
        switch (os) {
            case "Windows_NT":
                return resolve(...fps).replaceAll("/", "\\");
            case "Linux":
                return resolve(...fps).replaceAll("\\", "/");
            default:
                throw new Error(`invalid os: os=${os}`);
        }
    },
};

interface WriteArgs {
    fp: string;
    content: string;
}

export default fnFileLoader;
