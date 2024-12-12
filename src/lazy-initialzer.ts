export class LazyInitializer<T> {
    constructor(private readonly factory: () => T) {
    }

    private _value: T | null = null;

    public get value(): T {
        this._value ??= this.factory();
        return this._value;
    }
}