# `@vitrain/react-icons`

> The icon components for react

## Install

```
$ npm install @vitrain/react-icons
or
$ yarn add @vitrain/react-icons
```

## Usage

```TypeScript
import React from 'react';
import {Link} from '@vitrain/react-icons';
function App() {
  return (
    <div className="App">
      <Link size={24} color={'blue'}></Link>
    </div>
  );
}

export default App;
```

## Other ways

1. Include the whole icon pack:

```TypeScript
import * as Icons from '@vitrain/react-icons';

const App = () => (<Icons.Github></Icons.Github>)
```

2. Include single icon:

```TypeScript
import Github from '@vitrain/icons/lib/Github';

const App = () => (<Icons.Github></Icons.Github>)
```

3. Destructure

```
import {Github} from '@vitrain/react-icons';

const App = () => (<Icons.Github></Icons.Github>)
```
