# `@viterian/icons`

> The icon components for react

## Install
```$ npm install @viterian/icons```
```$ yarn add @viterian/icons```

## Usage
```
import React from 'react';
import {Link} from '@viterian/icons';
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
```
import * as Icons from '@viterian/icons';

const App = () => (<Icons.Github></Icons.Github>)
```

2. Include single icon:
```
import Github from '@viterian/icons/lib/Github';

const App = () => (<Icons.Github></Icons.Github>)
```

3. Destructure
```
import {Github} from '@viterian/icons';

const App = () => (<Icons.Github></Icons.Github>)
```