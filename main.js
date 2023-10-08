var DavidAbilities = {
    Expression: class Expression {

    },
    Equation: class Equation {
        constructor(leftSide, rightSide) {
            [this.leftSide, this.rightSide] = [leftSide, rightSide];
        }
        add(eq) {
            return []
        }
        get neg() {

        }
        mult(eq) {
            /* Multiply by value:
            this.mult([v,v]);
            since for any v:
            v=v
            is a true equation
            Same for add
            neg() shorthand for mult([-1,-1]);
             */
            if (eq instanceof Number) {
                let v;
                eq = new Equation(v = new Expression(eq), v);
            }
        }
    }
}