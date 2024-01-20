grammar MyGrammar;


file:          (expr ';')+ EOF;
expr:          NUMBER (OP expr)?;
OP:            '+' | '-' | '*' | '/';
NUMBER:        [1–9]+;