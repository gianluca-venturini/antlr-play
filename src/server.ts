import { MyGrammarLexer } from './my_grammar/generated/MyGrammarLexer';
import { MyGrammarListener } from './my_grammar/generated/MyGrammarListener';
import { ExprContext, MyGrammarParser } from './my_grammar/generated/MyGrammarParser';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

export class MyLangListener implements MyGrammarListener {

    private operands: number[] = [];

    exitEveryRule: (ctx: ParserRuleContext) => {};

    exitExpr(ctx: ExprContext): void {
        if (ctx.NUMBER()) {
            this.operands.push(parseInt(ctx.NUMBER().text));
            console.log('number', ctx.NUMBER().text);
        }
        if (ctx.OP()) {
            const operator = ctx.OP().text;
            switch (operator) {
                case '+':
                    this.operands.push(this.operands.pop() + this.operands.pop());
                    break;
                case '-':
                    this.operands.push(-this.operands.pop() + this.operands.pop());
                    break;
                default:
                    throw new Error(`Unknown operator ${operator}`);
            }
            console.log('operator', ctx.OP().text);
        }
    }

    get result(): number {
        return this.operands.pop();
    }
  
}

const text = `1+1-1;`;

// Give the lexer our input as a stream of characters
const charStream = CharStreams.fromString(text);
const lexer = new MyGrammarLexer(charStream);

// Create a stream of tokens and give it to the parser
const tokenStream = new CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokenStream);

// Walk the syntax tree from the ‘file’ rule as the beginning
const ruleContext = parser.file();
const listener = new MyLangListener();
ParseTreeWalker.DEFAULT.walk(listener, ruleContext);
console.log('result', listener.result);
