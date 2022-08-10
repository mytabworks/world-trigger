# World Trigger
This is use for Reactjs, React-Native, Vuejs, and any js framework out there, to trigger or dispatch registered callbacks on any component without using any context.

- [Installation](#installation)
- [How To Use](#how-to-use)
    - [Importing](#imports) 
    - [Basic Usage](#basic-usage)
<br/>

# installation
```
npm i world-trigger
```

or

```
yarn add world-trigger
```
<br/>

# How to use
<br/>

## imports
```js
import worldTrigger from "world-trigger"
```
<br/>

## Basic Usage

```js
import worldTrigger from "world-trigger"

const handleTestTrigger = (data) => {
  console.log(`Yey! ${data.firstname} has trigger me.`)
}
// registered the trigger
worldTrigger.addTrigger('test.trigger', handleTestTrigger)

// unregistered the trigger
worldTrigger.removeTrigger('test.trigger', handleTestTrigger)

// dispatching the trigger with data
worldTrigger.dispatchTrigger('test.trigger', { firstname: 'JR' })

```
<br/><br/>

## Reactjs

```js
import React from "react"
import worldTrigger from "world-trigger"

export const App = () => {
    useEffect(() => {
      const handleTestTrigger = (data) => {
        console.log(`Yey! ${data.firstname} has trigger me.`)
      }

      worldTrigger.addTrigger('test.trigger', handleTestTrigger)

      return () => worldTrigger.removeTrigger('test.trigger', handleTestTrigger)
    }, [])
    
    return ( 
        <ButtonTrigger />
    );
}

const ButtonTrigger = () => { 
    const handleClick = () => {
      worldTrigger.dispatchTrigger('test.trigger', { firstname: 'JR' })
    }

    return (
        <button type="button" onClick={handleClick}>Trigger Me</button>
    );
}
```

## License
MIT Licensed. Copyright (c) Mytabworks 2020.