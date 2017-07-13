export interface StringValidator {
    isAcceptable(s: string): boolean;
}

interface NumberValidator {
    isAcceptable(s: string): boolean;
}