# typescript-lazy-initializer

```typescript
const lazy = new LazyInitializer<string>(() => {
    return "foo";
});

const value = lazy.value;
consoe.log(value); // foo
```
