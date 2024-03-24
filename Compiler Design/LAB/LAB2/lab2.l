%{
#include <stdio.h>
%}

%%
[0-9]+      { printf("Number: %s\n", yytext); printf("\n Enter a character :");}
[a-zA-Z]    { printf("Alphabet: %c\n", yytext[0]); printf("\n Enter a character :");}
[ \t\n]     ;  // Ignore whitespace characters
[!@#$%^&*()-+=<>?/\\.,;:'"{}|] { printf("Special Character/Operator: %c\n", yytext[0]); printf("\n Enter a character :");}
.           { printf("Unrecognized: %c\n", yytext[0]); }

%%

int yywrap(){}

int main() {
    printf("Enter a character ::");	
    yylex();
    return 0;
}