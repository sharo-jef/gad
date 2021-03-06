import Brainfuck from 'brainfuck-node'

import Command from '../command.js'

export default class BrainfuckCommand extends Command {
    name = 'brainfuck';
    synopsis = `${process.env.PREFIX}brainfuck <code>`;
    examples = `${process.env.PREFIX}brainfuck '--[----->+<]>.+++++++++..'`;
    desc = `execute brainfuck

**CODE**
code will be parsed with \`brainfuck-node\``;
    /**
     * @param {any} client client
     * @param {any} message message
     * @param {array} command command
     * @param {string} stdin stdin
     * @return {string} result
     */
    exec(client, message, command, stdin) {
        const source = stdin.length > 0 ? stdin : command[2].content;

        const brainFuck = new Brainfuck();

        const result = brainFuck.execute(source);

        return result.output;
    }
};
