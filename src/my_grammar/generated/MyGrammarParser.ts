// Generated from MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyGrammarListener } from "./MyGrammarListener";
import { MyGrammarVisitor } from "./MyGrammarVisitor";


export class MyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly OP = 2;
	public static readonly NUMBER = 3;
	public static readonly RULE_file = 0;
	public static readonly RULE_expr = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "OP", "NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyGrammarParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.expr();
				this.state = 5;
				this.match(MyGrammarParser.T__0);
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MyGrammarParser.NUMBER);
			this.state = 11;
			this.match(MyGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MyGrammarParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this.match(MyGrammarParser.NUMBER);
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyGrammarParser.OP) {
				{
				this.state = 14;
				this.match(MyGrammarParser.OP);
				this.state = 15;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\x15\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x06\x02\n\n\x02\r\x02\x0E" +
		"\x02\v\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\x13\n\x03\x03\x03" +
		"\x02\x02\x02\x04\x02\x02\x04\x02\x02\x02\x02\x14\x02\t\x03\x02\x02\x02" +
		"\x04\x0F\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07\b\x07\x03\x02\x02" +
		"\b\n\x03\x02\x02\x02\t\x06\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\t\x03" +
		"\x02\x02\x02\v\f\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r\x0E\x07\x02\x02" +
		"\x03\x0E\x03\x03\x02\x02\x02\x0F\x12\x07\x05\x02\x02\x10\x11\x07\x04\x02" +
		"\x02\x11\x13\x05\x04\x03\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02" +
		"\x02\x13\x05\x03\x02\x02\x02\x04\v\x12";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MyGrammarParser.EOF, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_file; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(MyGrammarParser.NUMBER, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.OP, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_expr; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


