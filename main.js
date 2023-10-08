var DavidAbilities = {
    Expression: class Expression {
        render() {

        }
    },
    Equation: class Equation extends String {
        static eqExprParse = /((\w|[+*/-])+)\s*?=\s*?((\w|[+*/-])+)/gm;
        static delWhitespace = /\s/gm;
        constructor(leftSide, rightSide) {
            [this.leftSide, this.rightSide] = [leftSide, rightSide];
        }
        constructor(wholeEq) {
            wholeEq.replace(this.delWhitespace, "");
            const regex = this.eqExprParse;
            let m;
            while ((m = regex.exec(wholeEq)) !== null) {
                regex.lastIndex += (m.index === regex.lastIndex);
                [this.leftSide, this.rightSide] = [m[1], m[3]];
            }
        }
        toString() {
            return this.leftSide + "=" + this.rightSide;
        }
    }
}