# MIGRATION

From [react-slidy](https://github.com/midudev/react-slidy) 4 to @s-ui/react-molecule-carousel

1. Update the dependency

**from**
```json
{
  "dependencies": {
    ...
    "react-slidy": "4.x.x",
    ...
  }  
}
```
**to**
```json
{
  "dependencies": {
    ...
    "@s-ui/react-molecule-carousel": "1",
    ...
  }  
}
```

2. Replace the imports

**from**
````js
import Slidy from 'react-slidy'
````
**to**
````js
import MoleculeCarousel from '@s-ui/react-molecule-carousel'
````

3. Replace props (if needed)
- ~~useFullWidth~~ --> isFullWidth
- ~~useFullHeight~~ --> isFullHeight

**from**
```jsx
import MoleculeCarousel from '@s-ui/react-molecule-carousel'

return (
  <MoleculeCarousel
    useFullWidth
    useFullHeight
  >
    <img alt="1" src="./image1.jpg" />
    <img alt="2" src="./image3.jpg" />
    <img alt="3" src="./image3.jpg" />
  </MoleculeCarousel>
)
```
**to**
```jsx
import MoleculeCarousel from '@s-ui/react-molecule-carousel'

return (
  <MoleculeCarousel
    isFullWidth
    isFullHeight
  >
    <img alt="1" src="./image1.jpg" />
    <img alt="2" src="./image3.jpg" />
    <img alt="3" src="./image3.jpg" />
  </MoleculeCarousel>
)
``` 
