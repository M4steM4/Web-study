# Jest
JavaScript Testing Framework


## Table of Contents

1. [About Jest](#About-Jest)
1. [How Can Use](#How-Can-Use)
1. [Jest Function](#Jest-Function)


### About Jest

- JavaScript testing framework


### How Can Use

- Install : `npm install —save-dev jest` or `yarn add —dev jest`
- Testing : Create file name `[name].test.js`
- Unit test :
```JavaScript
    test([testing name], () => {
        expect(module.function()).toBe(value);
    })
```


### Jest Function

- `.toBe(value)` : Match function return & value
- `.not.toBe(value)` : Match function return & value are not same
- `.toEqual(value)` : Match function return equal value
- `.toBeNull()` : Check function return is null
- `.toBeDefined()` : Check value is defined
- `.not.toBeDefined` : Check value is not defined
- `.toBeGreaterThan(num)` : Compare value greater than num
- `.toBeGreaterThanOrEqul` : Compare value greater or equal than num
- `.toBeLessThan(num)` : Compare value less than num
- `.toBeLessThanOrEqual` : Compare value less or equal than num
- `.toMatch(reg)` : Check value match regular expression
- `.not.toMatch(reg)` : Check value not match regular expression
