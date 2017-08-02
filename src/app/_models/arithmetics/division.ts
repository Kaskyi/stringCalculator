export function canDivide(f: number, s: number): boolean {
    return s !== 0;
}
export function divide(f: number, s: number): number {
    if (canDivide(f, s)) {
        return f / s;
    } else {
        console.log('Error division by zero !');
        return 0;
    }
}
