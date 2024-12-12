# typescript-lazy-initializer

```typescript
const lazy = new LazyInitializer<string>(() => {
    return "foo";
});

const value = lazy.value;
console.log(value); // foo
```
