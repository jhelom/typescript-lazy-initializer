import {LazyInitializer} from "./index";

test('lazy', () => {
    const lazy = new LazyInitializer(() => "foo");
    expect(lazy.value).toBe("foo");
});
