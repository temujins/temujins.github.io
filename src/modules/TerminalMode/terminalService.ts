import type { TerminalHistory, TerminalExitCode, FileEntry } from "@/types";
import { rootDirectory } from "./directories";
import { marked } from "marked";
import dayjs from "dayjs";

export class IgnoreCommand implements TerminalHistory {
    cmd = "";
    output = "";
    exitCode: TerminalExitCode = 0;

    constructor(public readonly pwd: string) {}

    exec(): TerminalExitCode {
        return 0;
    }
}

export class InvalidCommand implements TerminalHistory {
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(
        public readonly cmd: string,
        public readonly pwd: string,
    ) {}

    exec(): TerminalExitCode {
        this._exitCode = 1;
        this._output = "No identified command!";
        return 1;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

export class cd implements TerminalHistory {
    private readonly args: string[];
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(
        public readonly cmd: string,
        public readonly pwd: string,
        private currentDir: FileEntry,
        private callback: (e: FileEntry) => void,
    ) {
        this.args = cmd.split(" ");
    }

    exec(): TerminalExitCode {
        try {
            if (this.args.length !== 2) {
                this.callback(rootDirectory);
                this._output = "Moved to ~";
                this._exitCode = 0;
                return 0;
            }
            const newLocation = this.currentDir.cd(this.args[1]);
            this.callback(newLocation);
            this._output = "Moved to " + newLocation.name;
            this._exitCode = 0;
            return 0;
        } catch (err: any) {
            console.error(err);
            this._output = err.message;
            this._exitCode = 1;
            return 1;
        }
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

export class ls implements TerminalHistory {
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(
        public readonly cmd: string,
        public readonly pwd: string,
        private currentDir: FileEntry,
    ) {}

    exec(): TerminalExitCode {
        this._output = `<div class="flex flex-row flex-wrap gap-1">`;
        for (const child of this.currentDir.children.values()) {
            this._output += `<span class="inline-block mr-6">${child.name}`;
            if (!child.fileContent) {
                this._output += "/";
            }
            this._output += "</span>";
        }
        this._output += `</div>`;
        this._exitCode = 0;
        return 0;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

export class cat implements TerminalHistory {
    private readonly args: string[];
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(
        public readonly cmd: string,
        public readonly pwd: string,
        private currentDir: FileEntry,
    ) {
        this.args = cmd.split(" ");
    }

    exec(): TerminalExitCode {
        if (this.args.length != 2) {
            this._output = "Please specify a file name.\n'cat [filename]'";
            this._exitCode = 1;
            return 1;
        }
        const file = this.currentDir.children.get(this.args[1]);
        if (!file) {
            this._output = `No file found with name: "${file}"`;
            this._exitCode = 1;
            return 1;
        }
        if (!file.fileContent) {
            this._output = `"${file}" is a directory.`;
            this._exitCode = 1;
            return 1;
        }
        this._output = file.fileContent;
        this._exitCode = 0;
        return 0;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

export class Time implements TerminalHistory {
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(
        public readonly cmd: string,
        public readonly pwd: string,
    ) {}

    exec(): TerminalExitCode {
        this._output = dayjs(Date.now()).toISOString();
        return 0;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

export class Echo implements TerminalHistory {
    private args: string[];
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(
        public readonly cmd: string,
        public readonly pwd: string,
    ) {
        this.args = cmd.split(" ");
    }

    exec(): TerminalExitCode {
        this._output = this.args.slice(1).join(" ");
        return 0;
    }

    get output() {
        return this._output.replace(/[<>{}()]/gi, "");
    }
    get exitCode() {
        return this._exitCode;
    }
}

const helpText = marked(`Available commands:
- <span class="text-primary-400">help, h</span> -> See all the available command list
- <span class="text-primary-400">list_exp</span> -> All my experiences
- <span class="text-primary-400">list_proj</span> -> All my Projects
- <span class="text-primary-400">ls</span> -> List all the directories/files of the current path
- <span class="text-primary-400">cd [dir name]</span> -> Move between directories
- <span class="text-primary-400">cat [file name]</span> -> Print the contents of a file. Use this to see my experiences and project descriptions`) as string;

export class Help implements TerminalHistory {
    cmd = "Hi there, welcome to my portfolio.";
    output = helpText;
    exitCode: TerminalExitCode = 0;
    constructor(public readonly pwd: string) {}

    exec(): TerminalExitCode {
        return 0;
    }
}

export const introHistory: TerminalHistory = {
    cmd: "Hi there, welcome to my portfolio.",
    output: helpText,
    exitCode: 0,
    pwd: "",
    exec: () => 0,
};