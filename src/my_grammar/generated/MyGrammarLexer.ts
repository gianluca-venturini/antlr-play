// Generated from MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MyGrammarLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly OP = 2;
	public static readonly NUMBER = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "OP", "NUMBER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "OP", "NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarLexer._LITERAL_NAMES, MyGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MyGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MyGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MyGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x12\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x06\x04\x0F\n\x04\r\x04\x0E\x04\x10\x02\x02\x02\x05\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\x03\x02\x04\x05\x02,-//11\x05\x0233;;\u2015" +
		"\u2015\x02\x12\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x03\t\x03\x02\x02\x02\x05\v\x03\x02\x02\x02\x07\x0E\x03" +
		"\x02\x02\x02\t\n\x07=\x02\x02\n\x04\x03\x02\x02\x02\v\f\t\x02\x02\x02" +
		"\f\x06\x03\x02\x02\x02\r\x0F\t\x03\x02\x02\x0E\r\x03\x02\x02\x02\x0F\x10" +
		"\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\b" +
		"\x03\x02\x02\x02\x04\x02\x10\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarLexer._serializedATN));
		}

		return MyGrammarLexer.__ATN;
	}

}

