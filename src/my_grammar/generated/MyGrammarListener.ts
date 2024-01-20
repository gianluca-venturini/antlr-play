// Generated from MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./MyGrammarParser";
import { ExprContext } from "./MyGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export interface MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyGrammarParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

