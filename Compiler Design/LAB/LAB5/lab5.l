%{
#include <stdio.h>
%}

%%
[a-z] { printf("%c", toupper(yytext[0])); }
.     { ECHO; }
%%

int main() {
    char input[100];
    printf("Samrajya Chand");
    printf("Enter a string: ");
    if (fgets(input, sizeof(input), stdin) == NULL) {
        printf("Error reading input\n");
        return 1;
    }
    yy_scan_string(input);
    yylex();
    return 0;
}

int yywrap() {
    return 1;
}
