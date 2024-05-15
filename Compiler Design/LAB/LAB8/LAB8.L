%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
%}

keyword[int|float|char|void|main|function|return|if|while|do|for|else|switch]
number [0-9]+
identifier [a-zA-Z_][a-zA-Z0-9_]*
operator [+-/*=]+

%%
int|float|char|void|main|function|return|if|while|do|for|else|switch { printf("%s: keyword\n", yytext); }
[0-9]+ { printf("%s: number \n", yytext); }
[a-zA-Z_][a-zA-Z0-9_]* { printf("%s: id \n", yytext); }
[+-/*=]+ { printf("%s: operator \n", yytext);}
\"(\\.|[^"])*\"         
 . {}
%%


int main(int argc[],char *argv[])
{
printf("Samrajya Chand \n");
printf("enter input \n");
 yyin=fopen("input.c", "r"); 
 yylex();  
 return 0;
}
int yywrap() {
    return 1; 
}
