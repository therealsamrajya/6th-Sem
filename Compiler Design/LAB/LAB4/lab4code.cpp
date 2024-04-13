#include <iostream>
#include <string>
#include <cctype>
#include <sstream>

using namespace std;

enum TokenType
{
    KEYWORD,
    IDENTIFIER,
    LITERAL,
    INVALID
};

bool isKeyword(const string &token)
{
    return (token == "if" || token == "else" || token == "while" || token == "for" || token == "int" || token == "float");
}

TokenType getTokenType(const string &token)
{
    if (isKeyword(token))
    {
        return KEYWORD;
    }
    else if (isdigit(token[0]))
    {
        return LITERAL;
    }
    else if (isalpha(token[0]) || token[0] == '_')
    {
        return IDENTIFIER;
    }
    else
    {
        return INVALID;
    }
}
int main()
{
    string input;
    cout << "Samrajya Chand" << endl;
    cout << "Enter C code (terminated by '$'): " << endl;
    getline(cin, input, '$');

    stringstream ss(input);
    string token;
    TokenType tokenType;

    cout << "Tokens:" << endl;
    while (ss >> token)
    {
        tokenType = getTokenType(token);
        switch (tokenType)
        {
        case KEYWORD:
            cout << "Keyword: " << token << endl;
            break;
        case IDENTIFIER:
            cout << "Identifier: " << token << endl;
            break;
        case LITERAL:
            cout << "Literal: " << token << endl;
            break;
        default:
            cout << "Invalid token: " << token << endl;
            break;
        }
    }

    return 0;
}
